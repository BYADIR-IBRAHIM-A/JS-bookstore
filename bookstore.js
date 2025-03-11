
// تعريف المصفوفة لتخزين معلومات الكتب
let books = [
    [1, "Start with Why", "Simon Sinek", 80.0, 13],
    [2, "But How Do It Know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You Don't Know JS", "Kyle Simpson", 39.9, 9]
];

/*
// دالة لإضافة كتاب جديد
function addBook(bookId, bookTitle, author, price, quantity) {
    books.push([bookId, bookTitle, author, price, quantity]);
}
*/

let NUMBOOK=3;
// دالة للاستعلام عن كتاب باستخدام رقم الكتاب
function searchByBookId(NUMBOOK) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === NUMBOOK) {
            console.log("يوجد");
        }
        else {
            console.log("لا يوجد");
        }
    }
}
searchByBookId(3);

/*
// دالة لإضافة كتاب جديد
function addBook(bookId, bookTitle, author, price, quantity) {
    books.push([bookId, bookTitle, author, price, quantity]);
}



// دالة للاستعلام عن كتاب باستخدام عنوان الكتاب
function searchByTitle(title) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][1] === title) {
            return books[i];
        }
    }
    return null; // في حالة عدم العثور على الكتاب
}

// دالة للاستعلام عن كتاب باستخدام اسم المؤلف
function searchByAuthor(author) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][2] === author) {
            return books[i];
        }
    }
    return null; // في حالة عدم العثور على الكتاب
}

// أمثلة على استخدام الدوال
addBook(1, "Start with Why", "Simon Sinek", 80.0, 13);
addBook(2, "But how do it know", "J. Clark Scott", 59.9, 22);
addBook(3, "Clean Code", "Robert Cecil Martin", 50.0, 5);
addBook(4, "Zero to One", "Peter Thiel", 45.0, 12);
addBook(5, "You don't know JS", "Kyle Simpson", 39.9, 9);

console.log(searchByBookId(3)); // [3, "Clean Code", "Robert Cecil Martin", 50.0, 5]
console.log(searchByTitle("Zero to")); // [4, "Zero to One", "Peter Thiel", 45.0, 12]
console.log(searchByAuthor("Kyle Simpson")); // [5, "You don't know JS", "Kyle Simpson", 39.9, 9]

// دالة لبيع كتاب وإصدار فاتورة
function sellBook(bookTitle, quantity, balance) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][1] === bookTitle) {
            if (books[i][4] >= quantity) {
                const totalPrice = books[i][3] * quantity;
                if (balance >= totalPrice) {
                    books[i][4] -= quantity; // إنقاص المخزون
                    balance -= totalPrice; // تحديث الرصيد
                    return `تمت عملية الشراء بنجاح! \nفاتورة الشراء:\nعنوان الكتاب: ${bookTitle}\nالكمية: ${quantity}\nالسعر الإجمالي: ${totalPrice}\nالرصيد المتبقي: ${balance}`;
                } else {
                    return "الرصيد غير كافي لشراء الكمية المطلوبة.";
                }
            } else {
                return "الكمية المطلوبة غير متوفرة في المخزون.";
            }
        }
    }
    return "الكتاب غير متوفر.";
}

// أمثلة على تنفيذ عملية البيع وإصدار فاتورة
console.log(sellBook("Zero to One", 3, 200)); // مثال لنجاح عملية البيع
console.log(sellBook("Clean Code", 10, 500)); // مثال لفشل عملية البيع بسبب عدم توفر الكمية المطلوبة
console.log(sellBook("But how do it know", 5, 100)); // مثال لفشل عملية البيع بسبب الرصيد غير كافي
*/