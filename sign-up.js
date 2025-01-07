// JavaScript for toggling between customer and seller form
document.getElementById('customer-btn').addEventListener('click', function() {
    document.getElementById('seller-fields').classList.add('hidden');
});

document.getElementById('seller-btn').addEventListener('click', function() {
    document.getElementById('seller-fields').classList.remove('hidden');
});