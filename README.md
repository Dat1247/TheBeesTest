1. Logic test - in branch "Logic-test"
 - Create a function changeToHex with num (with type number) is a parameter, num is a integer number and have range from 0 to 255
 - Check if num less than 0 then set it to 0, and check if num greater than 255 set it to 255
 - Use function toString(16) to convert the num to hexa, that have variable "hex" is a result.
 - Check if the length of "hex", if it == 1, add "0" to the "hex", otherwise return "hex"
2. App development test - in branch "main"
- I use ReactJS to build the layout, antd to create the table has pagination with 100 user (10 user each page)
- Create new function getUser with for loop to auto-generated 100 users.
- In the function changeBalance, I convert the balance to string and use regex to create the comma in the balance.
- Use Popover tag of ant design to show the detailed date and time, including hours & seconds when hover the registration time.
- In the status, check active of user, if it is true then set status is "Online", otherwise set status is "Offline".
- And decor some things.
