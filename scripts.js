function switchLanguage() {
    var language = document.getElementById('language-selector').value;
    var elements = document.querySelectorAll('[data-en]');
    elements.forEach(function (element) {
        var el = element;
        if (language === 'jp') {
            el.innerText = el.getAttribute('data-jp') || '';
        }
        else {
            el.innerText = el.getAttribute('data-en') || '';
        }
    });
}
function displayContent(cardType) {
    var contentDisplay = document.getElementById('content-display');
    var content = '';
    switch (cardType) {
        case 'kamishibai':
            content = "\n                <h2 data-en=\"Kamishibai\" data-jp=\"\u7D19\u829D\u5C45\">Kamishibai</h2>\n                <p data-en=\"Kamishibai is a traditional Japanese form of storytelling using illustrated boards. It provides an interactive and engaging experience for audiences of all ages.\"\n                   data-jp=\"\u7D19\u829D\u5C45\u306F\u3001\u30A4\u30E9\u30B9\u30C8\u30DC\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u305F\u65E5\u672C\u306E\u4F1D\u7D71\u7684\u306A\u30B9\u30C8\u30FC\u30EA\u30FC\u30C6\u30EA\u30F3\u30B0\u306E\u5F62\u5F0F\u3067\u3059\u3002\u3059\u3079\u3066\u306E\u5E74\u9F62\u5C64\u306E\u89B3\u5BA2\u306B\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u3067\u9B45\u529B\u7684\u306A\u4F53\u9A13\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\">\n                   Kamishibai is a traditional Japanese form of storytelling using illustrated boards. It provides an interactive and engaging experience for audiences of all ages.\n                </p>";
            break;
        case 'translation':
            content = "\n                <h2 data-en=\"Translation\" data-jp=\"\u7FFB\u8A33\">Translation</h2>\n                <p data-en=\"Our translation services offer high-quality translations for various languages, ensuring accuracy and cultural relevance for your content.\"\n                   data-jp=\"\u79C1\u305F\u3061\u306E\u7FFB\u8A33\u30B5\u30FC\u30D3\u30B9\u306F\u3001\u3055\u307E\u3056\u307E\u306A\u8A00\u8A9E\u306B\u5BFE\u3057\u3066\u9AD8\u54C1\u8CEA\u306E\u7FFB\u8A33\u3092\u63D0\u4F9B\u3057\u3001\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u6B63\u78BA\u6027\u3068\u6587\u5316\u7684\u95A2\u9023\u6027\u3092\u4FDD\u8A3C\u3057\u307E\u3059\u3002\">\n                   Our translation services offer high-quality translations for various languages, ensuring accuracy and cultural relevance for your content.\n                </p>";
            break;
        case 'support':
            content = "\n                <h2 data-en=\"Support\" data-jp=\"\u30B5\u30DD\u30FC\u30C8\">Support</h2>\n                <p data-en=\"We provide 24/7 customer support to assist you with any inquiries or issues you may have. Our dedicated team is here to help you at any time.\"\n                   data-jp=\"\u79C1\u305F\u3061\u306F\u3001\u3042\u3089\u3086\u308B\u304A\u554F\u3044\u5408\u308F\u305B\u3084\u554F\u984C\u306B\u5BFE\u5FDC\u3059\u308B\u305F\u3081\u306B24\u6642\u9593365\u65E5\u306E\u30AB\u30B9\u30BF\u30DE\u30FC\u30B5\u30DD\u30FC\u30C8\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002\u79C1\u305F\u3061\u306E\u5C02\u4EFB\u30C1\u30FC\u30E0\u306F\u3044\u3064\u3067\u3082\u3042\u306A\u305F\u3092\u52A9\u3051\u308B\u305F\u3081\u306B\u3053\u3053\u306B\u3044\u307E\u3059\u3002\">\n                   We provide 24/7 customer support to assist you with any inquiries or issues you may have. Our dedicated team is here to help you at any time.\n                </p>";
            break;
    }
    contentDisplay.innerHTML = content;
    switchLanguage(); // Apply the current language to the new content
}
