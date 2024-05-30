import React from "react";

const Graphics = () => {
    const myDesigns = {
        "Feminism Stickers": "https://drive.google.com/file/d/108LSYBeDxSaybxMIPgI3bzpvem8kGtM-/view",
        "Tembera": "https://drive.google.com/file/d/1KPu2MmjtGr6FTuuV9d3z4Ioiz5BstC7I/view?usp=sharing",
        "feminist Org Brochure Template": "https://drive.google.com/file/d/1ORoCtoILUYQdgW018gKrV_mwKd15saiF/view"
    };

    return (
        <div>
            {Object.keys(myDesigns).map((name, index) => (
                <div key={index}>
                    <a href={myDesigns[name]} target="_blank" rel="noopener noreferrer">{name}</a>
                    <br/>
                    <iframe src={`https://doc-10-68-prod-01-apps-viewer.googleusercontent.com/viewer2/prod-01/pdf/nq2skulbjhenuuaado64881ac6emeh0t/uc6ecu257i3mgjhp05mj45jsmcpnr9ke/1717065075000/3/106865253631526138286/APznzaZH1JTOB0mLIbgqtQWUhQ79aDt3eeqDeMCG3Gbuti2XslhoQ9sv8bHj81ElEj2RTG3VbpMZAGm4N9YKjxbWqhJna5OEXXA73_skiW8e2V-R8jwpyvwML3qePTjjIWb07gkaNuARYlkYFcjSXaj_O9R1nvKGJMXjVv1SzvRgh4nqM11C-oXlFwXW36Tvovb33vZK5ahyWep2GquUrhaY8M6kTogOomoPg-oTEzyfN_ZwNx7xzDZs12anwYv4949EzWOlIttPUYTlTzmoWEfOSCn4P9QIZaAPsz3Li5h-_c1HaMsWUHyiBWZPSeOpbQu6Dmlr7K1HwJ62VQVUWqnpC80OQrcFBNJIdSTIpvd6IUMuome2C0w9KLvYng6pqGyZ7iySEzxvRQiVIeqpLW6XF7wOfAFec2lTLaYc2ohb_gjDVy5enWY=?authuser=0&nonce=tnj6ie63v3sng&user=106865253631526138286&hash=a4k0srae1ke6st6fjgm0dvb559a2b81i`}></iframe>
                </div>
            ))}
        </div>
    );
};

export default Graphics;
