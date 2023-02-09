function carryGifts(gifts, maxWeight) {
    let bags = [];
    let currentBag = [];
    let currentWeight = 0;

    if (gifts.some(gift => gift.length > maxWeight)) {
        return [];
    }

    gifts.forEach(gift => {
        if (currentWeight + gift.length <= maxWeight) {
            currentBag.push(gift);
            currentWeight += gift.length;
        } else {
            bags.push(currentBag);
            currentBag = [gift];
            currentWeight = gift.length;
        }
    });

    if (currentBag.length > 0) {
        bags.push(currentBag);
    }
    let formattedGroupedGifts = bags.map(giftGroup => giftGroup.join(' '));
    return formattedGroupedGifts;
}


  console.log(carryGifts(['toy', 'toy', 'toy', 'toy'], 2))
  //