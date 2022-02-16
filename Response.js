let object1 = JSON.parse(`
{
    "kind": "customsearch#search",
    "url": {
        "type": "application/json",
        "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
    },
    "queries": {
        "request": [
            {
                "title": "Google Custom Search - hello world",
                "totalResults": "10",
                "searchTerms": "hello world",
                "count": 10,
                "startIndex": 1,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "103d864a5affd95bc"
            }
        ]
    },
    "context": {
        "title": "Google"
    },
    "searchInformation": {
        "searchTime": 0.40571,
        "formattedSearchTime": "0.41",
        "totalResults": "10",
        "formattedTotalResults": "10"
    },
    "items": [
        {
            "kind": "customsearch#result",
            "title": "Hello World Shopping",
            "htmlTitle": "<b>Hello World</b> Shopping",
            "link": "https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg.k0nhcDgmvBfs&hl=it",
            "displayLink": "www.google.com",
            "snippet": "Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google ...",
            "htmlSnippet": "Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google&nbsp;...",
            "cacheId": "q0-peCHq4tIJ",
            "formattedUrl": "https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it",
            "htmlFormattedUrl": "https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it",
            "pagemap": {
                "website": [
                    {
                        "image": "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
                        "name": "Hello World Shopping",
                        "description": "Hello World Shopping",
                        "url": "https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
                        "og:type": "website",
                        "twitter:card": "summary_large_image",
                        "twitter:title": "Hello World Shopping",
                        "viewport": "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
                        "twitter:description": "Hello World Shopping",
                        "og:title": "Hello World Shopping",
                        "og:url": "https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
                        "og:description": "Hello World Shopping",
                        "twitter:image:src": "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Hello World! Processing",
            "htmlTitle": "<b>Hello World</b>! Processing",
            "link": "https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
            "displayLink": "www.google.com",
            "snippet": "Hello World! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.",
            "htmlSnippet": "<b>Hello World</b>! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.",
            "cacheId": "LkrfSTqN6ZAJ",
            "formattedUrl": "https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...",
            "htmlFormattedUrl": "https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...",
            "pagemap": {
                "website": [
                    {
                        "image": "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
                        "name": "Hello World! Processing",
                        "description": "Hello World! Processing",
                        "url": "https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
                        "og:type": "website",
                        "twitter:card": "summary_large_image",
                        "twitter:title": "Hello World! Processing",
                        "viewport": "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
                        "twitter:description": "Hello World! Processing",
                        "og:title": "Hello World! Processing",
                        "og:url": "https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
                        "og:description": "Hello World! Processing",
                        "twitter:image:src": "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance",
            "htmlTitle": "<b>Helloworld</b> Travel Ltd (HLO) Stock Price &amp; News - Google Finance",
            "link": "https://www.google.com/finance/quote/HLO:ASX",
            "displayLink": "www.google.com",
            "snippet": "Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed ...",
            "htmlSnippet": "Get the latest <b>Helloworld</b> Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed&nbsp;...",
            "cacheId": "24Jok8mq6O4J",
            "formattedUrl": "https://www.google.com/finance/quote/HLO:ASX",
            "htmlFormattedUrl": "https://www.google.com/finance/quote/HLO:ASX",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQldTHAz14MiWY-2bpICyONYLUjcoY7hJc8AQj1tmfmhHDQ43UNmSVu_8",
                        "width": "311",
                        "height": "162"
                    }
                ],
                "metatags": [
                    {
                        "application-name": "Google Finance",
                        "og:image": "https://ssl.gstatic.com/finance/favicon/finance_770x402.png",
                        "theme-color": "#ffffff",
                        "og:type": "website",
                        "og:image:width": "770",
                        "twitter:card": "summary",
                        "twitter:title": "Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance",
                        "apple-mobile-web-app-title": "Google Finance",
                        "og:title": "Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance",
                        "og:image:height": "402",
                        "og:description": "Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.",
                        "twitter:image": "https://ssl.gstatic.com/finance/favicon/finance_496x496.png",
                        "referrer": "origin",
                        "apple-mobile-web-app-status-bar-style": "default",
                        "msapplication-tap-highlight": "no",
                        "twitter:site": "@google",
                        "viewport": "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
                        "apple-mobile-web-app-capable": "yes",
                        "twitter:description": "Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.",
                        "mobile-web-app-capable": "yes",
                        "og:url": "https://www.google.com/finance/quote/HLO:ASX"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://ssl.gstatic.com/finance/favicon/finance_770x402.png"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Google",
            "htmlTitle": "Google",
            "link": "https://www.google.com/",
            "displayLink": "www.google.com",
            "snippet": "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking ...",
            "htmlSnippet": "Search the <b>world&#39;s</b> information, including webpages, images, videos and more. Google has many special features to help you find exactly what you&#39;re looking&nbsp;...",
            "cacheId": "y14FcUQOGl4J",
            "formattedUrl": "https://www.google.com/",
            "htmlFormattedUrl": "https://www.google.com/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3X9ZpkcNrr2kAcGZuXPZTNiK1oeTXhRMCZ1UGxNLf-an4du0eriX01mc",
                        "width": "320",
                        "height": "112"
                    }
                ],
                "metatags": [
                    {
                        "referrer": "origin",
                        "viewport": "width=device-width,minimum-scale=1.0",
                        "google": "notranslate",
                        "format-detection": "telephone=no"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Android | The platform pushing what's possible",
            "htmlTitle": "Android | The platform pushing what&#39;s possible",
            "link": "https://www.google.com/android",
            "displayLink": "www.google.com",
            "snippet": "Find the latest and greatest on the world's most powerful mobile platform. Browse devices, explore resources and learn about the latest updates.",
            "htmlSnippet": "Find the latest and greatest on the <b>world&#39;s</b> most powerful mobile platform. Browse devices, explore resources and learn about the latest updates.",
            "cacheId": "Rmor56Dtt0sJ",
            "formattedUrl": "https://www.google.com/android",
            "htmlFormattedUrl": "https://www.google.com/android",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlL31UNmhQ6iUKMqDVtaB6e0BFA4fWfGmbbpvNYwz-1MTWSvQSV9KFm2kB",
                        "width": "310",
                        "height": "163"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA",
                        "og:type": "website",
                        "twitter:card": "summary_large_image",
                        "og:site_name": "Android",
                        "twitter:site": "@android",
                        "viewport": "initial-scale=1, minimum-scale=1, width=device-width",
                        "og:title": "Android | The platform pushing what’s possible",
                        "og:locale": "en_US",
                        "og:url": "https://www.android.com/",
                        "title": "Android | The platform pushing what’s possible",
                        "og:description": "Find the latest and greatest on the world’s most powerful mobile platform. Browse devices, explore resources and learn about the latest updates."
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Google Search - Discover How Google Search Works",
            "htmlTitle": "Google Search - Discover How Google Search Works",
            "link": "https://www.google.com/search/howsearchworks/",
            "displayLink": "www.google.com",
            "snippet": "Our mission is to organize the world's information and make it universally accessible and useful. It starts with Google Search.",
            "htmlSnippet": "Our mission is to organize the <b>world&#39;s</b> information and make it universally accessible and useful. It starts with Google Search.",
            "cacheId": "QaaN9KCyEasJ",
            "formattedUrl": "https://www.google.com/search/howsearchworks/",
            "htmlFormattedUrl": "https://www.google.com/search/howsearchworks/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS3cygt5kGAiZY-7hO8fSAHJHy5cC3mlOzc5Dbg3h6qghrry_RtnEAEo",
                        "width": "310",
                        "height": "163"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
                        "og:type": "website",
                        "twitter:card": "summary",
                        "twitter:title": "Google Search - Discover How Google Search Works",
                        "og:site_name": "Google Search - Discover How Google Search Works",
                        "og:title": "Google Search - Discover How Google Search Works",
                        "og:description": "Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant Search results in a fraction of a second.",
                        "og:image:secure_url": "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
                        "twitter:image": "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
                        "referrer": "no-referrer",
                        "viewport": "width=device-width, initial-scale=1.0",
                        "twitter:description": "Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant Search results in a fraction of a second.",
                        "og:locale": "en",
                        "og:url": "https://www.google.com/search/howsearchworks/"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Google Slides – create and edit presentations online, for free.",
            "htmlTitle": "Google Slides – create and edit presentations online, for free.",
            "link": "https://www.google.com/intl/en-GB/slides/about/",
            "displayLink": "www.google.com",
            "snippet": "Create a new presentation and edit it at the same time as others. Get things done with or without an Internet connection. Use Slides to edit PowerPoint ...",
            "htmlSnippet": "Create a new presentation and edit it at the same time as others. Get things done with or without an Internet connection. Use Slides to edit PowerPoint&nbsp;...",
            "cacheId": "ZGn_PEZ9DdcJ",
            "formattedUrl": "https://www.google.com/intl/en-GB/slides/about/",
            "htmlFormattedUrl": "https://www.google.com/intl/en-GB/slides/about/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEO12K-QgsjQPh5BI1urBxR1-H2sXs_nk3omUXz-8pR1RfkRG79tws2w",
                        "width": "120",
                        "height": "120"
                    }
                ],
                "metatags": [
                    {
                        "viewport": "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://www.google.com/intl/en-GB/slides/about/images/common/add-pam.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Google Sheets – create and edit spreadsheets online, for free.",
            "htmlTitle": "Google Sheets – create and edit spreadsheets online, for free.",
            "link": "https://www.google.com/intl/en-GB/sheets/about/",
            "displayLink": "www.google.com",
            "snippet": "Create a new spreadsheet and edit with others at the same time – from your computer, phone or tablet. Get things done with or without an Internet connection ...",
            "htmlSnippet": "Create a new spreadsheet and edit with others at the same time – from your computer, phone or tablet. Get things done with or without an Internet connection&nbsp;...",
            "cacheId": "oifzQE3FJnUJ",
            "formattedUrl": "https://www.google.com/intl/en-GB/sheets/about/",
            "htmlFormattedUrl": "https://www.google.com/intl/en-GB/sheets/about/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIr167PAyEc-WePgz8Ntm2IafGLM8K-vgW0gqUOfC3ux8yuPP4POzY",
                        "width": "120",
                        "height": "120"
                    }
                ],
                "metatags": [
                    {
                        "viewport": "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://www.google.com/intl/en-GB/sheets/about/images/common/add-tom.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Gmail - Free Storage and Email from Google",
            "htmlTitle": "Gmail - Free Storage and Email from Google",
            "link": "https://www.google.com/gmail/about/policy/",
            "displayLink": "www.google.com",
            "snippet": "Gmail Program Policies · Report abuse · Account Inactivity · Spam and Bulk Mail · The Creation and Use of Multiple Gmail Accounts · Malware · Fraud, Phishing, and ...",
            "htmlSnippet": "Gmail Program Policies &middot; Report abuse &middot; Account Inactivity &middot; Spam and Bulk Mail &middot; The Creation and Use of Multiple Gmail Accounts &middot; Malware &middot; Fraud, Phishing, and&nbsp;...",
            "cacheId": "CUbfvCtLss0J",
            "formattedUrl": "https://www.google.com/gmail/about/policy/",
            "htmlFormattedUrl": "https://www.google.com/gmail/about/policy/",
            "pagemap": {
                "metatags": [
                    {
                        "og:image": "//www.google.com/gmail/about/static/images/social.jpg",
                        "og:type": "website",
                        "og:site_name": "Gmail - Free Storage and Email from Google",
                        "viewport": "width=device-width, initial-scale=1, maximum-scale=1",
                        "og:title": "Gmail - Free Storage and Email from Google",
                        "og:url": "http://www.google.com/gmail/about/"
                    }
                ],
                "cse_image": [
                    {
                        "src": "//www.google.com/gmail/about/static/images/social.jpg"
                    }
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Gmail: Free, Private & Secure Email | Google Workspace",
            "htmlTitle": "Gmail: Free, Private &amp; Secure Email | Google Workspace",
            "link": "https://www.google.com/gmail/about/",
            "displayLink": "www.google.com",
            "snippet": "Discover how Gmail keeps your account & emails encrypted, private and under your control with the largest secure email service in the world.",
            "htmlSnippet": "Discover how Gmail keeps your account &amp; emails encrypted, private and under your control with the largest secure email service in the <b>world</b>.",
            "cacheId": "mcW-4V-4uf0J",
            "formattedUrl": "https://www.google.com/gmail/about/",
            "htmlFormattedUrl": "https://www.google.com/gmail/about/",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR4YKVTJQ1EAsXWnqsU4GNXikGvDWVi-mHlfPO3MRdO0eukCSyl61Tc7q8",
                        "width": "318",
                        "height": "159"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://www.google.com/gmail/about/static-2.0/images/share-facebook.jpg",
                        "og:type": "website",
                        "twitter:card": "summary_large_image",
                        "twitter:title": "Gmail: Free, Private & Secure Email | Google Workspace",
                        "og:title": "Gmail: Free, Private & Secure Email | Google Workspace",
                        "og:description": "Discover how Gmail keeps your account & emails encrypted, private and under your control with the largest secure email service in the world.",
                        "og:image:secure_url": "https://www.google.com/gmail/about/static-2.0/images/share-facebook.jpg",
                        "twitter:image": "https://www.google.com/gmail/about/static-2.0/images/share-twitter.jpg",
                        "referrer": "no-referrer",
                        "viewport": "width=device-width, initial-scale=1.0",
                        "twitter:description": "Discover how Gmail keeps your account & emails encrypted, private and under your control with the largest secure email service in the world.",
                        "og:locale": "en",
                        "og:url": "https://www.google.com/gmail/about/"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://www.google.com/gmail/about/static-2.0/images/share-facebook.jpg"
                    }
                ],
                "hproduct": [
                    {
                        "fn": "Gmail",
                        "photo": "https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97"
                    }
                ]
            }
        }
    ]
}`);

export default object1;
