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
            }, 
            {
                id: 3, 
                title: 'Divinity Original Sin 2', 
                description: 'The eagerly anticipated sequel to the award-winning RPG. Gather your party. Master deep, tactical combat.',
                price: '44.99',
                coverImage: 'https://cdn-prod.scalefast.com/public/assets/user/6562614/image/fc0fea76b4a2f75dc282d0dba05a31a1.jpg'
            },
            {
                id: 4, 
                title: 'Borderlands 3', 
                description: 'The original shooter-looter returns, packing bazillions of guns and an all-new mayhem-fueled adventure!',
                price: '44.99',
                coverImage: 'https://store-images.s-microsoft.com/image/apps.29198.64533163757722640.6f7413b4-c2c4-4451-8064-60774a6d143e.e0f7a7f8-ab7d-458a-a4fc-2bfc8a8fbfcc'
            }
        ];
    }
}