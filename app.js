// if1
// Agar berilgan son musbat bo'lsa, unga 1 qo'shiladi. Agar son manfiy yoki 0 bo'lsa, o'zgarmaydi.
let n = 5;
if (n > 0) {
    n += 1;
}
console.log("if1:", n);

// if2
// Agar berilgan son musbat bo'lsa, unga 1 qo'shiladi. Agar son manfiy bo'lsa, undan 2 ayiriladi.
n = -3;
if (n > 0) {
    n += 1;
} else {
    n -= 2;
}
console.log("if2:", n);

// if3
// Agar berilgan son musbat bo'lsa, unga 1 qo'shiladi. Agar manfiy bo'lsa, undan 2 ayiriladi.
// Agar son 0 bo'lsa, uni 10 ga o'zgartiradi.
n = 0;
if (n > 0) {
    n += 1;
} else if (n < 0) {
    n -= 2;
} else {
    n = 10;
}
console.log("if3:", n);

// if4
// Uchta butun son berilgan. Ularning nechta musbat ekanligini aniqlaydi.
let a = 3, b = -1, c = 4;
let count = 0;
if (a > 0) count++;
if (b > 0) count++;
if (c > 0) count++;
console.log("if4:", count);

// if5
// Uchta butun son berilgan. Ularning nechta musbat va nechta manfiy ekanligini aniqlaydi.
a = 3, b = -1, c = -2;
let posCount = 0;
let negCount = 0;
if (a > 0) posCount++;
if (a < 0) negCount++;
if (b > 0) posCount++;
if (b < 0) negCount++;
if (c > 0) posCount++;
if (c < 0) negCount++;
console.log("if5: Manfiy =", posCount, ", Musbat =", negCount);

// if6
// Ikkita butun son berlgan. Ularning kattasini anqlaydi va ekranga chiqaradi.
a = 8, b = 5;
let max = a > b ? a : b;
console.log("if6: Max =", max);

// if7
// Ikkita butun son berilgan. Ularning kicsigi va kattasini aniqlaydi va ularni tartib bilan chiqaradi.
a = 7, b = 12;
let min, maxVal;
if (a < b) {
    min = a;
    maxVal = b;
} else {
    min = b;
    maxVal = a;
}
console.log("if7: Min =", min, ", Max =", maxVal);

// if8
// Ikkita butun sonm berilgan. Ularning avval kattasini, keyin kichigini ekranga chiqaradi.
a = 15, b = 10;
if (a > b) {
    console.log("if8: Katta =", a, ", Mayda =", b);
} else {
    console.log("if8: Mayda =", b, ", Mayda =", a);
}

// if9
// A va B haqiqiy sonlari berilgan. Ularni shunday o'zgartiradiki, A kichik, B katta qiymatga ega bo'ladi.
let x = 7, y = 3;
if (x > y) {
    let temp = x;
    x = y;
    y = temp;
}
console.log("if9: A =", x, ", B =", y);

// if10
// A va B butun sonlari berilgan. Agar ular teng bo'lmasa, ikkalasini ham kattasiga tenglashtiradi.
// Agar teng bo'lsa, ikkalasini ham 0 ga o'zgartiradi.
x = 5, y = 5;
if (x !== y) {
    if (x > y) {
        y = x;
    } else {
        x = y;
    }
} else {
    x = 0;
    y = 0;
}
console.log("if10: A =", x, ", B =", y);





//Case misollar 
// Case1: 1-7 gacha bo'lgan sonni kiritganingizda, u hafta kunini chiqaradi.
let day = 3; // Misol uchun kiritilgan kun raqami
switch (day) {
    case 1:
        console.log("Case1: Dushanba"); // Agar 1 bo'lsa, Dushanba chiqadi
        break;
    case 2:
        console.log("Case1: Seshanba"); // Agar 2 bo'lsa, Seshanba chiqadi
        break;
    case 3:
        console.log("Case1: Chorshanba"); // Agar 3 bo'lsa, Chorshanba chiqadi
        break;
    case 4:
        console.log("Case1: Payshanba"); // Agar 4 bo'lsa, Payshanba chiqadi
        break;
    case 5:
        console.log("Case1: Juma"); // Agar 5 bo'lsa, Juma chiqadi
        break;
    case 6:
        console.log("Case1: Shanba"); // Agar 6 bo'lsa, Shanba chiqadi
        break;
    case 7:
        console.log("Case1: Yakshanba"); // Agar 7 bo'lsa, Yakshanba chiqadi
        break;
    default:
        console.log("Case1: Xato: 1-7 oralig'ida son kiriting"); // Boshqa sonlar uchun xatolik
}

// Case2: 1-5 oralig'ida baho kiritilganda, unga mos baho natijasini chiqaradi.
let grade = 4; // Misol uchun kiritilgan baho
switch (grade) {
    case 1:
        console.log("Case2: Yomon"); // Agar 1 bo'lsa, "Yomon" chiqadi
        break;
    case 2:
        console.log("Case2: Case2: Qoniqarsiz"); // Agar 2 bo'lsa, "Qoniqarsiz" chiqadi
        break;
    case 3:
        console.log("Case2: Qoniqarli"); // Agar 3 bo'lsa, "Qoniqarli" chiqadi
        break;
    case 4:
        console.log("Case2: Yaxshi"); // Agar 4 bo'lsa, "Yaxshi" chiqadi
        break;
    case 5:
        console.log("Case2: A'lo"); // Agar 5 bo'lsa, "A'lo" chiqadi
        break;
    default:
        console.log("Case2: Xato: 1-5 oralig'ida baho kiriting"); // Boshqa sonlar uchun xatolik
}

// Case3: Oy raqamiga qarab faslni aniqlaydi (1-12 oralig'idagi oy raqami kiritiladi).
let month = 2; // Misol uchun oy raqami
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Case3: Qish"); // 12, 1, yoki 2 bo'lsa "Qish" fasli
        break;
    case 3:
    case 4:
    case 5:
        console.log("Case3: Bahor"); // 3, 4, yoki 5 bo'lsa "Bahor" fasli
        break;
    case 6:
    case 7:
    case 8:
        console.log("Case3: Yoz"); // 6, 7, yoki 8 bo'lsa "Yoz" fasli
        break;
    case 9:
    case 10:
    case 11:
        console.log("Case3: Kuz"); // 9, 10, yoki 11 bo'lsa "Kuz" fasli
        break;
    default:
        console.log("Case3: Xato: 1-12 oralig'ida oy kiriting"); // Boshqa sonlar uchun xatolik
}

// Case4: Oy raqamiga qarab oyda nechta kun borligini chiqaradi.
month = 4; // Misol uchun oy raqami
switch (month) {
    case 2:
        console.log("Case4:  28 yoki 29 kun"); // Fevralda 28 yoki 29 kun bo'ladi
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Case4: 30 kun"); // 4, 6, 9, 11 oylarida 30 kun bor
        break;
    default:
        console.log("Case4: 31 kun"); // Boshqa oylar uchun 31 kun bor
}

// Case5: Ikki son va amallar turi kiritilganda, kiritilgan amalni bajaradi.
let A = 10, B = 5, operation = 3; // Misol uchun qiymatlar va amal turi
switch (operation) {
    case 1:
        console.log("Case5: Qo'shish:", A + B); // Agar amal 1 bo'lsa, qo'shish bajariladi
        break;
    case 2:
        console.log("Case5:  Ayirish:", A - B); // Agar amal 2 bo'lsa, ayirish bajariladi
        break;
    case 3:
        console.log("Case5:  Bo'lish:", A / B); // Agar amal 3 bo'lsa, bo'lish bajariladi
        break;
    case 4:
        console.log("Case5:  Ko'paytirish:", A * B); // Agar amal 4 bo'lsa, ko'paytirish bajariladi
        break;
    default:
        console.log("Case5:  Xato: 1-4 oralig'ida amal kiriting"); // Boshqa sonlar uchun xatolik
}

// Case6: Uzunlik birligini kiritganda, uzunlikni metrlarda hisoblab beradi.
let lengthUnit = 3, lengthValue = 5; // Uzunlik birligi va qiymat
switch (lengthUnit) {
    case 1:
        console.log("Case6:  Desimetr:", lengthValue / 10, "metr"); // 1 - desimetrdan metrga o'girish
        break;
    case 2:
        console.log("Case6:  Kilometr:", lengthValue * 1000, "metr"); // 2 - kilometrdan metrga o'girish
        break;
    case 3:
        console.log("Case6:  Metr:", lengthValue, "metr"); // 3 - metr, o'zgarmaydi
        break;
    case 4:
        console.log("Case6:  Millimetr:", lengthValue / 1000, "metr"); // 4 - millimetrdan metrga o'girish
        break;
    case 5:
        console.log("Case6:  Santimetr:", lengthValue / 100, "metr"); // 5 - santimetrdan metrga o'girish
        break;
    default:
        console.log("Case6:  Xato: 1-5 oralig'ida birlik kiriting"); // Boshqa sonlar uchun xatolik
}

// Case7: Og'irlik birligini kiritganda, kilogramda ifodalaydi.
let weightUnit = 2, weightValue = 4; // Og'irlik birligi va qiymat
switch (weightUnit) {
    case 1:
        console.log("Case7:  Kilogramm:", weightValue, "kg"); // 1 - kilogramm, o'zgarmaydi
        break;
    case 2:
        console.log("Case7:  Milligramm:", weightValue / 1000000, "kg"); // 2 - milligramdan kilogramga o'girish
        break;
    case 3:
        console.log("Case7:  Gramm:", weightValue / 1000, "kg"); // 3 - grammdan kilogramga o'girish
        break;
    case 4:
        console.log("Case7:  Tonna:", weightValue * 1000, "kg"); // 4 - tonnadan kilogramga o'girish
        break;
    case 5:
        console.log("Case7:  Sentner:", weightValue * 100, "kg"); // 5 - sentnerdan kilogramga o'girish
        break;
    default:
        console.log("Case7:  Xato: 1-5 oralig'ida birlik kiriting"); // Boshqa sonlar uchun xatolik
}

// Case8: Sana (kun va oy) kiritilganda, yaroqliligini tekshiradi (kabisa yili bo'lmagan).
let D = 20, M = 6; // Kiritilgan kun va oy
switch (M) {
    case 2:
        console.log(D <= 29 ? "Case8: Yaroqli sana" : "Yaroqsiz sana"); // Fevral 29 kungacha bo'lishi mumkin
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(D <= 30 ? "Case8: Yaroqli sana" : "Yaroqsiz sana"); // 30 kunli oylar
        break;
    default:
        console.log(D <= 31 ? "Case8: Yaroqli sana" : "Yaroqsiz sana"); // 31 kunli oylar
}

// Case9: Sana (kun va oy) kiritilganda, kabisa yili hisobga olinib yaroqliligini tekshiradi.
D = 29, M = 2;
let isLeapYear = true; // Kabisa yili
switch (M) {
    case 2:
        if (isLeapYear) {
            console.log(D <= 29 ? "Case9:  Yaroqli sana" : "Yaroqsiz sana"); // Kabisa yili, fevral 29 kungacha
        } else {
            console.log(D <= 28 ? "Case9:  Yaroqli sana" : "Yaroqsiz sana"); // Oddiy yil, fevral 28 kungacha
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(D <= 30 ? "Case9:  Yaroqli sana" : "Yaroqsiz sana"); // 30 kunli oylar
        break;
    default:
        console.log(D <= 31 ? "Case9:  Yaroqli sana" : "Yaroqsiz sana"); // 31 kunli oylar
}

// Case10: Robotning boshlang'ich holati va buyruq kiritilganda, yangi yo'nalishni aniqlaydi.
let direction = "s", command = 2; // Robotning boshlang'ich yo'nalishi va buyruq
switch (direction) {
    case "s":
        switch (command) {
            case 0:
                console.log("Case10:  Shimol"); // Robot shimolga qaraydi
                break;
            case 1:
                console.log("Case10:  G'arb"); // Robot g'arbga qaraydi
                break;
            case 2:
                console.log("Case10:  Janub"); // Robot janubga qaraydi
                break;
            case 3:
                console.log("Case10:  Sharq"); // Robot sharqqa qaraydi
                break;
        }
        break;
    // Yo'nalishning boshqa holatlari shu tarzda davom etadi.
}


// Misollar birinchi dars kiyingi darslarga ham omadlar tilayman 
// Misollar commentlari bilan
