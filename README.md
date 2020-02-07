
# IranianBankCard-JS
> Check validation card and get bank name and bank logo



Requirements
------
Step 1. Add Refrence to Head of document
```js
<script src="Js/IrBankValidator.js"></script>
```


Usage
------
Step 2. Add This To Html Body
```js
<!--Card Number Input-->
<input type="tel" id="CardNumber" /> 

<!--Bank Name Lable-->
<label id="lblBankName"></label>

<!--Bank Logo Image-->
<img id="bankLogo" />

<!--Validation Message-->
<span id="Validation"></span>
```

Step 3. Add To End of Html Body
```js
<script type="text/javascript">
	RegisterBankCardValidator("CardNumber", "bankLogo", "lblBankName","Validation");
</script>
```

## Are you a developer?
> 1-Fork it!</br>
> 2-Create your feature branch: git checkout -b my-new-feature</br>
> 3-Commit your changes: git commit -am 'Add some feature'</br>
> 4-Push to the branch: git push origin my-new-feature</br>
> 5-Submit a pull request</br>
