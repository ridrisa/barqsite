import os

# Define the name of the output file
output_file = "combined_file_1.txt"

# List of folders to skip
folders_to_skip = ['venv','flask_session','node_modules']  # Add more folder names as needed
# List of file extensions to skip
file_extensions_to_skip = [
    '.png', '.jpg', '.jpeg', '.gif', 'test.html','test1.html','test2.html','test3.html','test4.html','test5.html','map.html','.bmp','.avif', '.tiff', '.ico', '.pdf','.log','.pyc',
    'combined_file.txt','combined_file_1.txt','combine.py','.csv','coordinates.csv','polygon_boundary.csv','coordinates2impressions.py'
]

# Function to combine files
def combine_files(directory, outfile, skip_folders, output_file, skip_extensions):
    for root, dirs, files in os.walk(directory):
        # Skip specified directories
        dirs[:] = [d for d in dirs if d not in skip_folders and not d.startswith('.')]
        for file in files:
            file_path = os.path.join(root, file)
            # Skip hidden files, the output file itself, and files with specified extensions
            if file.startswith('.') or file_path == os.path.abspath(output_file) or any(file_path.lower().endswith(ext) for ext in skip_extensions):
                continue
            with open(file_path, 'rb') as infile:
                content = infile.read().decode('utf-8', errors='ignore')
                # Write the folder and file name before the content
                outfile.write(f"--- {root}/{file} ---\n")
                outfile.write(content)
                outfile.write("\n\n")  # Add some spacing between files
            print(f"Processed file: {file_path}")

# Create or empty the combined file
with open(output_file, 'w') as outfile:
    pass

print(f"Combining files into {output_file}...")

# Open the output file in append mode and combine all files
with open(output_file, 'a') as outfile:
    combine_files('.', outfile, folders_to_skip, output_file, file_extensions_to_skip)

print(f"All files combined successfully into {output_file}")
