// 1. Bir ID'ye sahip bir elementi seçmek için hangi yöntem kullanılır? Örnek bir kullanım gösterin.
const element = document.getElementById('myElement');

// 2. Bir sınıfa sahip tüm elementleri seçmek için hangi yöntem kullanılır? Örnek bir kullanım gösterin.
const elements = document.getElementsByClassName('myClass');

// 3. Belirli bir tag adına sahip tüm elementleri seçmek için hangi yöntem kullanılır? Örnek bir kullanım gösterin.
const elementsByTag = document.getElementsByTagName('p');

// 4. Bir elementin `innerHTML` değerini nasıl değiştirebilirsiniz? Örnek bir kullanım gösterin.
element.innerHTML = 'Yeni içerik';

// 5. Bir elementin `style` özelliğini değiştirmek için hangi yöntem kullanılır? Örnek bir kullanım gösterin.
element.style.color = 'red';

// 6. Bir elemente yeni bir sınıf eklemek için hangi yöntem kullanılır? Örnek bir kullanım gösterin.
element.classList.add('newClass');

// 7. Bir elementten belirli bir sınıfı kaldırmak için hangi yöntem kullanılır? Örnek bir kullanım gösterin.
element.classList.remove('oldClass');

// 8. Bir elementin `src` veya `href` gibi bir özelliğini değiştirmek için hangi yöntem kullanılır? Örnek bir kullanım gösterin.
const image = document.getElementById('myImage');
image.setAttribute('src', 'newImage.jpg');

// 9. Bir elemente tıklama olayını nasıl ekleyebilirsiniz? Örnek bir kullanım gösterin.
const button = document.getElementById('myButton');
button.addEventListener('click', () => alert('Button clicked!'));

// 10. Bir elemente dinamik olarak yeni bir element eklemek için hangi yöntem kullanılır? Örnek bir kullanım gösterin.
const parent = document.getElementById('parentElement');
const newElement = document.createElement('div');
newElement.innerHTML = 'Yeni Eleman';
parent.appendChild(newElement);

// 11. Bir elementin belirli bir child elementini seçmek için hangi yöntem kullanılır? Örnek bir kullanım gösterin.
const firstChild = parent.children[0];

// 12. Bir elementin `textContent` özelliği ile `innerHTML` özelliği arasındaki fark nedir?
// textContent sadece elementin metin içeriğini döner ve HTML tag'lerini dikkate almaz. innerHTML ise elementin içindeki HTML içeriğini döner ve HTML tag'lerini de içerir.

// 13. Bir elementi tamamen sayfadan kaldırmak için hangi yöntem kullanılır? Örnek bir kullanım gösterin.
element.remove();

// 14. Bir elementin üst veya altına yeni bir element eklemek için hangi yöntem kullanılır? Örnek bir kullanım gösterin.
parent.insertBefore(newElement, referenceElement);

// 15. Bir elementin var olup olmadığını kontrol etmek için hangi yöntem kullanılabilir? Örnek bir kullanım gösterin.
if (element) {
    console.log('Element exists');
} else {
    console.log('Element does not exist');
}

// Çoklu DOM Elemanları ile Çalışmak

// 16. Bir sınıfa sahip tüm elementleri seçip her biri üzerinde bir işlem gerçekleştirmek için nasıl bir döngü kullanılır? Örnek bir kullanım gösterin.
Array.from(elements).forEach(element => {
    element.style.color = 'blue';
});

// 17. Bir tag adına sahip tüm elementleri seçip her birine aynı işlemi uygulamak için hangi yöntemler kullanılabilir?
Array.from(elementsByTag).forEach(element => {
    element.style.fontWeight = 'bold';
});

// 18. Birden fazla elementin `innerHTML` özelliğini aynı anda değiştirmek için hangi yöntemler kullanılabilir?
Array.from(elements).forEach(element => {
    element.innerHTML = 'Yeni İçerik';
});

// 19. Birden fazla elementten belirli bir sınıfı kaldırmak için hangi yöntemler kullanılabilir?
elements.forEach(element => {
    element.classList.remove('oldClass');
});

// 20. Bir sınıfa sahip tüm elementlerin tıklama olayına aynı işlevi atamak için nasıl bir yöntem izlenir?
elements.forEach(element => {
    element.addEventListener('click', () => alert('Clicked!'));
});

// 21. Birden fazla elementi aynı anda gizlemek için hangi yöntemler kullanılabilir?
elements.forEach(element => {
    element.style.display = 'none';
});

// 22. Bir sınıfa sahip tüm elementleri döngü ile dolaşarak her birine farklı bir işlem yapmak için bir örnek gösterin.
elements.forEach((element, index) => {
    element.textContent = `Element ${index + 1}`;
});

// 23. QuerySelectorAll kullanarak birden fazla element üzerinde işlem yapmak için örnek bir kod yazın.
document.querySelectorAll('.myClass').forEach(element => {
    element.style.backgroundColor = 'yellow';
});

// 24. Bir sınıfa sahip tüm elementlere dinamik olarak yeni bir sınıf eklemek için bir örnek gösterin.
document.querySelectorAll('.myClass').forEach(element => {
    element.classList.add('newClass');
});

// 25. Bir sayfadaki tüm `p` tag'larının içeriğini değiştirmek için bir örnek gösterin.
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    paragraph.textContent = 'Yeni paragraf içeriği';
});

// 26. Bir sayfadaki tüm resimlerin (img tag'larının) `src` özelliğini değiştirmek için bir örnek gösterin.
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.src = 'newImage.jpg';
});

// 27. Bir sınıfa sahip tüm elementlerin stillerini aynı anda değiştirmek için bir örnek gösterin.
const elementsToStyle = document.querySelectorAll('.myClass');
elementsToStyle.forEach(element => {
    element.style.border = '2px solid red';
});

// 28. Bir sayfadaki belirli bir sınıfa sahip tüm elementlerin text içeriklerini toplayıp ekrana yazdıran bir örnek gösterin.
const elementsForText = document.querySelectorAll('.myClass');
let combinedText = '';
elementsForText.forEach(element => {
    combinedText += element.textContent + ' ';
});
console.log(combinedText);

// 29. Bir sayfadaki belirli bir tag'a sahip tüm elementleri nasıl sayabiliriz? Bir örnek gösterin.
const elementsCount = document.getElementsByTagName('p');
console.log(`Sayfadaki p tag'larının sayısı: ${elementsCount.length}`);

// 30. Bir sayfadaki belirli bir sınıfa sahip tüm elementlerin background rengini nasıl değiştirebiliriz? Bir örnek gösterin.
const elementsForBgChange = document.querySelectorAll('.myClass');
elementsForBgChange.forEach(element => {
    element.style.backgroundColor = 'lightblue';
});

// 31. Bir sayfadaki tüm form input'larını nasıl seçip hepsini temizleyebiliriz? Bir örnek gösterin.
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.value = '';
});