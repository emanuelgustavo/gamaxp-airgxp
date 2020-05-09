window.onload = () => {

    fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
        .then( response => {
            return response.json();    
        })
        .then( dataFromApi => {
            insertCards(dataFromApi);
        })
        .catch( error => {
            console.log(error)
        });

    const insertCards = dataFromApi => {

        const cardsElement = document.querySelector('.cards');
        
        dataFromApi.forEach( data => {
            const card = createCardElement(data);
            cardsElement.appendChild(card);
        });

    };

    const createCardElement = ({photo, name, property_type, price}) => {
        
        const priceElement = document.createElement('strong');
        priceElement.setAttribute('class', 'card-price');
        priceElement.appendChild(document.createTextNode(`R$ ${price} /diária`))
        
        const typeElement = document.createElement('span');
        typeElement.setAttribute('class', 'card-type');
        typeElement.appendChild(document.createTextNode(property_type))
        
        const titleElement = document.createElement('strong');
        titleElement.setAttribute('class', 'card-title');
        titleElement.appendChild(document.createTextNode(name))
        
        const cardInfoElement = document.createElement('div');
        cardInfoElement.setAttribute('class', 'card-info');
        cardInfoElement.appendChild(titleElement);
        cardInfoElement.appendChild(typeElement);
        cardInfoElement.appendChild(priceElement);

        const imageElement = document.createElement('img');
        imageElement.setAttribute('class', 'card-image');
        imageElement.setAttribute('src', photo);

        const cardElement = document.createElement('div');
        cardElement.setAttribute('class', 'card');
        cardElement.appendChild(imageElement);
        cardElement.appendChild(cardInfoElement);

        return cardElement;

    };

};
