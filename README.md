**Project Name: Add to Cart with React**
#### Project Description: Task for Internship of Nifty IT Solution.

###### Install dependencies
```javascript
npm install
```

###### Getting Started

```javascript
npm start
```

#### Technologies Used

##### . React.js
##### . Tailwind CSS
##### . Context API
##### . React Router Dom
##### . Local Storage

#### API Used
##### Dummy API : [https://dummyjson.com/products](https://dummyjson.com/products)


#### Basic Overview
###### How Does the Cart Functionality Work?
###### First, we fetch data from the Dummy API and store it in our context named cartcontext.js. Once we have the data, we retrieve it from our context and display it in the UI using the array.map function. When a user clicks the 'Add to Cart' button, we pass the product's individual ID as props and then store that cart data in our context. Simultaneously, we store our context in local storage to save the data. This ensures that users can see their cart data even after refreshing the page. Users can also navigate between pages using the navigation menu provided by React Router Dom. Finally, users have the option to edit the quantity of products in the cart on the cart page."