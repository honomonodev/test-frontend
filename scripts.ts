function switchLanguage() {
    const language = (document.getElementById('language-selector') as HTMLSelectElement).value;
    const elements = document.querySelectorAll('[data-en]');

    elements.forEach((element) => {
        const el = element as HTMLElement;
        if (language === 'jp') {
            el.innerText = el.getAttribute('data-jp') || '';
        } else {
            el.innerText = el.getAttribute('data-en') || '';
        }
    });
}

function displayContent(cardType: string) {
    const contentDisplay = document.getElementById('content-display') as HTMLElement;
    let content = '';

    switch (cardType) {
        case 'kamishibai':
            content = `
                <h2 data-en="Kamishibai" data-jp="紙芝居">Kamishibai</h2>
                <p data-en="Kamishibai is a traditional Japanese form of storytelling using illustrated boards. It provides an interactive and engaging experience for audiences of all ages."
                   data-jp="紙芝居は、イラストボードを使用した日本の伝統的なストーリーテリングの形式です。すべての年齢層の観客にインタラクティブで魅力的な体験を提供します。">
                   Kamishibai is a traditional Japanese form of storytelling using illustrated boards. It provides an interactive and engaging experience for audiences of all ages.
                </p>`;
            break;
        case 'translation':
            content = `
                <h2 data-en="Translation" data-jp="翻訳">Translation</h2>
                <p data-en="Our translation services offer high-quality translations for various languages, ensuring accuracy and cultural relevance for your content."
                   data-jp="私たちの翻訳サービスは、さまざまな言語に対して高品質の翻訳を提供し、コンテンツの正確性と文化的関連性を保証します。">
                   Our translation services offer high-quality translations for various languages, ensuring accuracy and cultural relevance for your content.
                </p>`;
            break;
        case 'support':
            content = `
                <h2 data-en="Support" data-jp="サポート">Support</h2>
                <p data-en="We provide 24/7 customer support to assist you with any inquiries or issues you may have. Our dedicated team is here to help you at any time."
                   data-jp="私たちは、あらゆるお問い合わせや問題に対応するために24時間365日のカスタマーサポートを提供しています。私たちの専任チームはいつでもあなたを助けるためにここにいます。">
                   We provide 24/7 customer support to assist you with any inquiries or issues you may have. Our dedicated team is here to help you at any time.
                </p>`;
            break;
    }

    contentDisplay.innerHTML = content;
    switchLanguage(); // Apply the current language to the new content
}