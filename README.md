To view the assignment on localhost kindly cd into correct directory and install npm modules.
Run npm start command to run the app in the browser.
The Table given in the assignment was created using the Ag-Grid Third Party Library.
The dataArray.js file contains the sample Data.
In the Table created there is the option to select single or multiple rows using checkBoxSelection and on top checkbox selection or deselection will either select or deselect all the rows.
Also on clicking on the delete button the selected rows are removed from the table.
And on clicking the reset button the Table initial data is restored. 
One of the name columns have filter to search the row on basis of name.
The price column arrow can be toggled to sort the price either in ascending or descending order. Clicking on Price cell in the table makes it instantly editable.
The BasicTable is rendered inside App.js which is rendered inside index.js.