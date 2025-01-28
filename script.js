let currentSlide = 0;  // เริ่มที่สไลด์แรก
const slides = [
    { image: 'image0.jpg', text: '10/10เพราะเราชอบฟังเพลง' },
    { image: 'image2.jpg', text: 'อาจ 9/10เพราะเราชอบเรียนคณิตศาตร์' },
    { image: 'image3.jpg', text: 'อาจ 8/10เพราะเราชอบกินก๋วยเตี๋ยว' },
    { image: 'image4.jpg', text: 'อาจ 7/10เพราะเราพูดไม่รู้เรื่อง' },
    { image: 'image5.jpg', text: 'อาจ 6/10เพราะเราติดสกินชิพ' },
    { image: 'image6.jpg', text: 'อาจ 5/10เพราะเราไม่มีเงินไปข้างนอก' },
    { image: 'image7.jpg', text: 'อาจ 4/10เพราะเราชอบร้องเพลง' },
    { image: 'image8.jpg', text: 'อาจ 3/10เพราะเราว่ายน้ำไม่เป็น' },
    { image: 'image9.jpg', text: 'อาจ 2/10เพราะเราขับรถไม่เป็น' },
    { image: 'image10.jpg', text: 'อาจ 1/10เพราะเราไม่เหล่อ' },
    { image: 'image11.jpg', text: 'อาจ 0/10เพราะเราเตี้ย;-;' },
];

function startPage() {
    // ซ่อนหน้า startPage และแสดง contentPage
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('contentPage').style.display = 'block';
    updateContent();
}

function updateContent() {
    const image = document.getElementById('image');
    const text = document.getElementById('text');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    image.src = slides[currentSlide].image;
    text.textContent = slides[currentSlide].text;

    // แสดง/ซ่อนปุ่ม prev และ next
    if (currentSlide === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'inline-block';
    }

    if (currentSlide === slides.length - 1) {
        nextBtn.style.display = 'none';  // ซ่อนปุ่ม Next ตอนหน้า 11
    } else {
        nextBtn.style.display = 'inline-block';
    }
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateContent();
    } else {
        // เมื่อถึงหน้าสุดท้าย (หน้า 11) จะไม่ทำอะไรแล้ว
        document.getElementById('nextBtn').style.display = 'none';
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateContent();
    }
}
