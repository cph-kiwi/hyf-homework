const addCSS = () => `
<style type = text/css>
* {
    box-sizing: border-box;
  }
  
  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    background-color: #f7cac9;
    color: #614e55;
  }
  
  .large-title {
    color: #614e55;
    font-weight: 800;
  }
  
  .medium-title {
    color: #614e55;
    font-weight: 800;
  }
  
  .small-title {
    color: #614e55;
    font-weight: 400;
  }
  
  .paragraph {
    color: #614e55;
    font-weight: 400;
  }
  
  .text-input {
    width: 300px;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid #614e55;
    color: black;
  }
  
  .text-input:focus {
    outline: none;
    border: 1px solid black;
    background-color: white;
  }
  
  .button {
    background-color: #f7d6c9;
    border: 1px solid #614e55;
    width: 200px;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 8px 16px;
  }
  
  ul {
    list-style-type: none;
  }
  
li {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
`;

module.exports = addCSS;
