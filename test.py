import PyPDF2
import pandas as pd

# File paths
pdf_file_path = 'List_of_19K_Restaurants_Cafe_s_Riyadh__1726329763.pdf'
excel_file_path = 'Restaurants_Cafes_Riyadh.xlsx'

# Initialize PDF reader
with open(pdf_file_path, 'rb') as file:
    reader = PyPDF2.PdfReader(file)
    
    all_data = []
    
    # Iterate through each page in the PDF
    for page_num in range(len(reader.pages)):
        page = reader.pages[page_num]
        text = page.extract_text()
        
        # Split the text into lines
        lines = text.split('\n')
        
        # Add data to list, assuming the structure follows the preview provided earlier
        for line in lines:
            columns = line.split(' ')  # Assuming data is space-separated, change if necessary
            all_data.append(columns)
    
    # Create DataFrame
    df = pd.DataFrame(all_data)

# Save DataFrame to Excel
df.to_excel(excel_file_path, index=False)

excel_file_path
