class Bank {
    constructor(sCode, bankTitle, imageName) {
        this.SCode = sCode;
        this.BankTitle = bankTitle;
        this.ImageName = imageName;
    }
}


var Banks = [new Bank("603799", "بانک ملی ایران", "bank_meli"), new Bank("589210", "بانک سپه", "bank_sepah")];
 
Banks.push(new Bank("207177", "بانک توسعه صادرات", "bank_toseh_saderat_iran"));
Banks.push(new Bank("627648", "بانک توسعه صادرات", "bank_toseh_saderat_iran"));

Banks.push(new Bank("636949", "بانک حکمت ایرانیان", "bank_hekmat"));

Banks.push(new Bank("627961", "بانک صنعت و معدن", "bank_sanat_va_madan"));

Banks.push(new Bank("603770", "بانک کشاورزی", "bank_kashavarzi"));
Banks.push(new Bank("639217", "بانک کشاورزی", "bank_kashavarzi"));

Banks.push(new Bank("628023", "بانک مسکن", "bank_maskan"));

Banks.push(new Bank("627760", "پست بانک ایران", "post_bank"));

Banks.push(new Bank("502908", "بانک توسعه تعاون", "bank_toseetaavon"));

Banks.push(new Bank("627412", "بانک اقتصاد نوین", "bank_en"));

Banks.push(new Bank("505785", "بانک پارسیان", "bank_parsian"));
Banks.push(new Bank("639164", "بانک پارسیان", "bank_parsian"));
Banks.push(new Bank("627884", "بانک پارسیان", "bank_parsian"));
Banks.push(new Bank("627353", "بانک پارسیان", "bank_parsian"));
Banks.push(new Bank("622106", "بانک پارسیان", "bank_parsian"));


Banks.push(new Bank("502229", "بانک پاسارگاد", "bank_pasargad"));
Banks.push(new Bank("639347", "بانک پاسارگاد", "bank_pasargad"));


Banks.push(new Bank("621986", "بانک سامان", "bank_saman"));


Banks.push(new Bank("639346", "بانک سینا", "bank_sina"));


Banks.push(new Bank("639607", "بانک سرمایه", "bank_sarmaeh"));

Banks.push(new Bank("502806", "بانک شهر", "bank_shahr"));

Banks.push(new Bank("502938", "بانک دی", "bank_day"));

Banks.push(new Bank("603769", "بانک صادرات", "bank_saderat_iran"));

Banks.push(new Bank("610433", "بانک ملت", "bank_melat"));
Banks.push(new Bank("991975", "بانک ملت", "bank_melat"));


Banks.push(new Bank("627353", "بانک تجارت", "bank_tejart"));

Banks.push(new Bank("589463", "بانک رفاه", "bank_refah"));

Banks.push(new Bank("627381", "بانک انصار", "bank_ansar"));

Banks.push(new Bank("639370", "بانک مهر اقتصاد", "bank_mehreghtesad"));

Banks.push(new Bank("505785", "بانک ایران زمین", "bank_iran_zamin"));

Banks.push(new Bank("606373", "بانک قرض الحسنه مهر ایران", "bank_gharzalhasaeh_iran"));


Banks.push(new Bank("639599", "بانک قوامین", "bank_ghavamin"));


Banks.push(new Bank("502910", "بانک کارآفرین", "bank_karafarin"));
Banks.push(new Bank("627488", "بانک کارآفرین", "bank_karafarin"));

Banks.push(new Bank("505416", "بانک گردشگری", "bank_gardeshgari);"));

Banks.push(new Bank("636795", "بانک مرکزی", "bank_markazi"));

Banks.push(new Bank("628157", "موسسه اعتباری توسعه", "moasseseh_tosee"));

Banks.push(new Bank("505801", "موسسه اعتباری کوثر", "moasseseh_kosar"));

Banks.push(new Bank("636214", "بانک آینده", "bank_ayandeh"));

var imageEl, txtCard, bankName, validation;

function RegisterBankCardValidator(txtCardNumber, image, lblBankName, vldtn) {
    imageEl = document.getElementById(image);
    txtCard = document.getElementById(txtCardNumber);
    bankName = document.getElementById(lblBankName);
    validation = document.getElementById(vldtn);
    txtCard.setAttribute('onkeyup', 'Validate(this)');

}

//Find Bank Info From 6 Start Digit of Card Number
function FindBank(sCode) {
    var item = window.Banks.find(x => x.SCode == sCode);
    return item;
}


function Validate(ths) {
    var val = ths.value;
    var bank = FindBank(val.substring(0, 6));
    if (bank == undefined) {
        imageEl.src = "";
    } else {
        imageEl.src = "./bank_fainal/" + bank.ImageName + ".png";
        bankName.innerText = bank.BankTitle;
        var isValid = CardValidation(val);
        validation.innerText = isValid;
    }
}


function CardValidation(value) {
    // Accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;

    // The Luhn Algorithm. It's so pretty.
    let nCheck = 0, bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
            nDigit = parseInt(cDigit, 10);

        if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}
