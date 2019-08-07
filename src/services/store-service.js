export default class StoreService {
    
    getItems() {
        return [
            { 
                id: 1, 
                title: 'World Of Warcraft', 
                description: 'Join thousands of mighty heroes in Azeroth, a world of magic and limitless adventure.',
                price: '49.99',
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/911ETVk3BVL._AC_SL1500_.jpg'
            },
            { 
                id: 2, 
                title: 'Dota 2 (Early Access Bundle)', 
                description: 'Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes.',
                price: '39.99',
                coverImage: 'https://www.futuregamereleases.com/file/2017/08/Dota-2-New-Twitch-Cover.jpg'
            }
        ];
    }
}