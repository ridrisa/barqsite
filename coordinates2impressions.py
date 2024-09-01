import csv
import json
from shapely.geometry import Point, Polygon
from shapely.wkt import loads as wkt_loads
import pandas as pd

# Load the CSV files
polygon_df = pd.read_csv('/Users/ramizmohamed/Desktop/sites/polygon_boundary.csv')
coordinates_df = pd.read_csv('/Users/ramizmohamed/Desktop/sites/coordinates.csv')

# Initialize polygons list
polygons = []

# Step 1: Parse the polygon boundaries
for index, row in polygon_df.iterrows():
    polygon_wkt = row['WKT'].strip()
    try:
        polygon = wkt_loads(polygon_wkt)
        polygons.append({
            "polygon": polygon,
            "name": row['name'],
            "description": row['description'] if not pd.isna(row['description']) else "",
            "points_count": 0  # Initialize points count
        })
    except Exception as e:
        print(f"Error parsing WKT on row {index}: {polygon_wkt}")
        print(f"Error: {e}")

# Function to determine if a coordinate is valid
def is_valid_coordinate(lat, lng):
    # If either value is a float, assume it's valid if not null or zero
    if isinstance(lat, float) and isinstance(lng, float):
        if lat == 0.0 or lng == 0.0:
            return False
        return True
    
    # If either value is a string, check for known invalid patterns
    invalid_patterns = ['staticmap?', 'Al+', 'data=', '']
    if any(pattern in lat for pattern in invalid_patterns) or any(pattern in lng for pattern in invalid_patterns):
        return False
    
    return True

# Step 2: Parse the coordinates and count them per polygon
for index, row in coordinates_df.iterrows():
    try:
        coordinates = json.loads(row['destination'])

        # Get latitude and longitude, which can be either strings or floats
        lat = coordinates.get('latitude', '')
        lng = coordinates.get('longitude', '')

        if not is_valid_coordinate(lat, lng):
            print(f"Skipping invalid coordinate on row {index}: {row['destination']}")
            continue

        # Convert strings to float if necessary
        if isinstance(lat, str):
            lat = float(lat)
        if isinstance(lng, str):
            lng = float(lng)

        point = Point(lng, lat)

        # Count points within each polygon and log the process
        matched = False
        for polygon in polygons:
            if polygon['polygon'].contains(point):
                polygon['points_count'] += 1
                matched = True
                print(f"Point {point} matched with polygon {polygon['name']}")
                break  # Assuming each point belongs to only one polygon

        if not matched:
            print(f"Point {point} did not match any polygon.")

    except (ValueError, TypeError, json.JSONDecodeError) as e:
        print(f"Error processing coordinates on row {index}: {row['destination']}")
        print(f"Error: {e}")
        continue  # Skip the invalid row and move on

# Find the minimum and maximum point counts
min_count = min(polygon['points_count'] for polygon in polygons)
max_count = max(polygon['points_count'] for polygon in polygons)

# Step 3: Dynamic color intensity based on min and max counts
def get_dynamic_color(points_count, min_count, max_count):
    if max_count == min_count:
        return '#f8d5cc'  # If all counts are the same, use a default color
    # Calculate the intensity as a percentage
    intensity = (points_count - min_count) / (max_count - min_count)
    
    # Map the intensity to a color range (you can adjust these colors)
    if intensity < 0.2:
        return '#f8d5cc'
    elif intensity < 0.4:
        return '#f4bfb6'
    elif intensity < 0.6:
        return '#f1a8a5'
    elif intensity < 0.8:
        return '#ee8f9a'
    else:
        return '#ec739b'

# Convert polygons with intensity to GeoJSON features
# Convert polygons with intensity to GeoJSON features
features = []
for polygon in polygons:
    color = get_dynamic_color(polygon['points_count'], min_count, max_count)
    features.append({
        "type": "Feature",
        "geometry": polygon['polygon'].__geo_interface__,
        "properties": {
            "name": polygon['name'],
            "description": polygon['description'],
            "points_count": polygon['points_count'],
            "color": color  # Assign dynamic color
        }
    })

# Create a GeoJSON feature collection
geojson_data = {
    "type": "FeatureCollection",
    "features": features
}

# Save the GeoJSON data to a file
with open('polygons_with_intensity.geojson', 'w') as geojson_file:
    json.dump(geojson_data, geojson_file, indent=4)

print("GeoJSON file has been saved successfully.")
