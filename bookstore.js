
// تعريف المصفوفة لتخزين معلومات الكتب
let books = [
    [1, "Start with Why", "Simon Sinek", 80.0, 13],
    [2, "But How Do It Know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You Don't Know JS", "Kyle Simpson", 39.9, 9]
];

// دالة لإضافة كتاب جديد
function addBook(bookId, bookTitle, author, price, quantity) {
    books.push([bookId, bookTitle, author, price, quantity]);
}

// دالة للاستعلام عن كتاب باستخدام رقم الكتاب
function searchByBookId(NUMBOOK) {
    let found = false;
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === NUMBOOK) {
            console.log("يوجد");
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("لا يوجد");
    }
}

// دالة للاستعلام عن كتاب باستخدام عنوان الكتاب
function searchByTitle(title) {
    let found = false;
    for (let i = 0; i < books.length; i++) {
        if (books[i][1] === title) {
            console.log("يوجد");
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("لا يوجد");
    }
}
// دالة للاستعلام عن كتاب باستخدام اسم المؤلف
function searchByAuthor(author) {
    let found = false;
    for (let i = 0; i < books.length; i++) {
        if (books[i][2] === author) {
            console.log("يوجد");
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("لا يوجد");
    }
}
// أبحث هنا 
searchByBookId(1);
searchByTitle("Youow JS");
searchByAuthor("Kyle Sn");

// المدخلات
let bookId = 1; // رقم الكتاب الذي يريده العميل
let quantityRequested = 1; // الكمية المطلوبة
let customerBalance = 7; // رصيد العميل الحالي

// إيجاد الكتاب المطلوب باستخدام bookId
let book = books.find(item => item[0] === bookId);

if (book) { // إذا تم العثور على الكتاب
    let bookTitle = book[1];
    let bookPrice = book[3];
    let availableStock = book[4];

    // التحقق من الشروط
    if (availableStock >= quantityRequested) { // التحقق من توفر الكمية
        let totalCost = bookPrice * quantityRequested; // حساب التكلفة الإجمالية
        if (customerBalance >= totalCost) { // التحقق من الرصيد
            // تنفيذ عملية البيع
            book[4] -= quantityRequested; // تحديث المخزون
            customerBalance -= totalCost; // تحديث رصيد العميل

            console.log("تمت عملية الشراء بنجاح!");
            console.log(`العنوان: ${bookTitle}`);
            console.log(`الكمية: ${quantityRequested}`);
            console.log(`المبلغ المدفوع: ${totalCost}`);
            console.log("شكراً لتعاملكم معنا!");
        } else {
            console.log("رصيد العميل غير كافٍ لإتمام عملية الشراء.");
        }
    } else {
        console.log("الكمية المطلوبة غير متوفرة في المخزون.");
    }
} else {
    console.log("الكتاب غير موجود.");
}