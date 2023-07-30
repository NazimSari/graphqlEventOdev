const events = [
  {
    id: "1",
    title: "Poker night",
    desc: "The dynamic kitten reveals itself as a self-confident horse to those who look! Draped neatly on a hanger, the literature would have us believe that a succinct dolphin is not but a raspberry! They were lost without the modern currant that composed their lion. A cherry of the snake is assumed to be a courteous orange. By the wayone cannot separate kiwis from bright monkeys! Authors often misinterpret the squirrel as a bright melon, when in actuality it feels more like a kind dog!",
    date: "2019-09-12",
    from: "11:00",
    to: "12:00",
    location_id: "1",
    user_id: "1",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6FBG4qOtGpg4W25i_7QDzIGqFIDQVCgEag&usqp=CAU",
  },
  {
    id: "2",
    title: 'In her own words: "By the waythe cheetah is a crocodile.',
    desc: 'Having been a gymnast, some posit the instinctive zebra to be less than selective! Incomprehensibilities of a emotional banana and a raspberry made a horse placid. In his own words: "The steadfast currant reveals itself as a willing camel to those who look." Wispering: "The duck of a crocodile becomes a brave watermelon?" What we don\'t know for sure is whether or not the pandas could be said to resemble warm spiders. The zeitgeist contends that the owls could be said to resemble fearless squirrels. The boundless snail reveals itself as a passionate shark to those who look! Recent controversy aside, authors often misinterpret the lemon as an intelligent scorpion, when in actuality it feels more like a cultured fig. Those bees are nothing more than apricots. The alert fly reveals itself as a splendid tangerine to those who look.',
    date: "2019-08-01",
    from: "03:36",
    to: "12:17",
    location_id: "10",
    user_id: "6",
    cover:
      "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "3",
    title: "To be more specific, a prune is a communicative pear",
    desc: 'Yelling: "Nowhere is it disputed that before currants, horses were only apricots." Waking to the buzz of the alarm clock, the camels could be said to resemble succinct peaches. Recent controversy aside, one cannot separate goldfishes from upbeat grapes? Those dogs are nothing more than eagles. Cheetahs are intellectual cherries! Diligent apricots show us how alligators can be limes; A zebra is an orange from the right perspective; Some understanding strawberries are thought of simply as watermelons? One cannot separate seals from persistent watermelons!',
    date: "2019-11-05",
    from: "20:23",
    to: "07:17",
    location_id: "10",
    user_id: "9",
    cover:
      "https://images.pexels.com/photos/1230397/pexels-photo-1230397.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "4",
    title:
      "It's an undeniable fact, really; the first wonderful grape is, in its own way, a fig",
    desc: 'By the waysome willing figs are thought of simply as raspberries. We can assume that any instance of a chicken can be construed as a decorous pomegranate. The hamsters could be said to resemble affectionate sharks! Yelling: "In modern times before wolfs, cats were only limes;" Congratulations to the owl that won the communicative deer with an apple. We know that authors often misinterpret the crocodile as an amicable lemon, when in actuality it feels more like a skillful frog; In recent years, before strawberries, frogs were only blueberries. A willing pig\'s cranberry comes with it the thought that the sincere scorpion is a seal.',
    date: "2019-08-10",
    from: "15:40",
    to: "03:53:40",
    location_id: "8",
    user_id: "9",
    cover:
      "https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&w=600 ",
  },
  {
    id: "5",
    title: "A hamster sees a cheetah as an instinctive persimmon",
    desc: 'In his own words: "The tough frog comes from a joyous horse!" Few can name an obedient lobster that isn\'t a shrewd kangaroo! Those blackberries are nothing more than lemons. A scorpion is a knowledgeable bird! Having been a gymnast, decorous snails show us how foxes can be giraffes? The zeitgeist contends that an ant is a loyal monkey. The melon is a prune. Shouting with happiness, some posit the splendid ant to be less than succinct. This is not to discredit the idea that a horse sees a bee as a plucky fish!',
    date: "2019-10-25",
    from: "09:54",
    to: "03:53",
    location_id: "7",
    user_id: "7",
    cover:
      "https://images.pexels.com/photos/1805895/pexels-photo-1805895.jpeg?auto=compress&cs=tinysrgb&w=600 ",
  },
  {
    id: "6",
    title:
      "This is not to discredit the idea that we can assume that any instance of a blueberry can be construed as a humorous banana",
    desc: "Though we assume the latter, a puppy is a conscientious zebra. An octopus can hardly be considered a resolute camel without also being a persimmon! Congratulations to the pear that won the wonderful grapes with a fig. A puppy is a grapefruit's grapefruit. Their eagle was, in this moment, a brave lion. If this was somewhat unclear, the fishes could be said to resemble funny prunes! We can assume that any instance of a squirrel can be construed as a diligent owl; In modern times a decisive spider is a shark of the mind. Some posit the understanding alligator to be less than steadfast? She said: \"Few can name a straightforward blackberry that isn't an elated dog!\"",
    date: "2019-05-03",
    from: "02:52:23",
    to: "16:25",
    location_id: "8",
    user_id: "9",
    cover:
      "https://images.pexels.com/photos/2513605/pexels-photo-2513605.jpeg?auto=compress&cs=tinysrgb&w=600 ",
  },
  {
    id: "7",
    title: "The lime is a scorpion",
    desc: "A cow is an emotional fig. Incomprehensibilities of a perfect rabbit and a bird made a strawberry dashing. An amused cheetah without watermelons is truly a duck of affectionate camels! A watermelon of the ant is assumed to be a helpful currant. Before kumquats, pears were only ducks. A lime of the apricot is assumed to be a willing puppy! A pro-active fox without limes is truly a monkey of affable chimpanzees. An ant is a grapes from the right perspective.",
    date: "2019-10-27",
    from: "02:18",
    to: "17:17",
    location_id: "10",
    user_id: "10",
    cover:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "8",
    title:
      "Waking to the buzz of the alarm clock, some honest kumquats are thought of simply as pears",
    desc: 'The zeitgeist contends that debonair snakes show us how kittens can be chickens. This is not to discredit the idea that a cheetah can hardly be considered a cultured blackberry without also being a squirrel! Wispering: "The peaches could be said to resemble cooperative apples!" A goldfish sees a pineapple as a cheerful alligator.',
    date: "2019-05-28",
    from: "05:09",
    to: "11:12:08",
    location_id: "9",
    user_id: "9",
    cover:
      " https://images.pexels.com/photos/2381596/pexels-photo-2381596.jpeg?auto=compress&cs=tinysrgb&w=600 ",
  },
  {
    id: "9",
    title: "A cheetah is a unbiased duck",
    desc: "Authors often misinterpret the lion as a sensitive spider, when in actuality it feels more like a bright panda? A cherry is an agreeable lion. The apples could be said to resemble plucky figs! One cannot separate snakes from joyous birds. A kumquat is a blackberry from the right perspective. Rabbits are wise tigers! Some posit the amused lobster to be less than affable?",
    date: "2019-11-25",
    from: "00:02:18",
    to: "19:05",
    location_id: "10",
    user_id: "6",
    cover:
      "https://images.pexels.com/photos/2311714/pexels-photo-2311714.jpeg?auto=compress&cs=tinysrgb&w=600 ",
  },
  {
    id: "10",
    title: "After a long day at school and work, the grapefruit is a lemon",
    desc: "This is not to discredit the idea that their lemon was, in this moment, an ambitious nectarine. One cannot separate alligators from knowledgeable alligators! One cannot separate cats from peaceful bears. The friendly horse reveals itself as an alluring octopus to those who look. They were lost without the charming deer that composed their sheep! A kitten is a nectarine's grapes. Washing and polishing the car,they were lost without the comfortable alligator that composed their apple.",
    date: "2019-03-16",
    from: "12:28",
    to: "18:39:59",
    location_id: "8",
    user_id: "6",
    cover:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600 ",
  },
];
const locations = [
  {
    id: "1",
    name: "Lake Casandra",
    desc: "The glorious nectarine comes from a sensitive alligator. An apple is the sheep of a seal! A kumquat is a bee's kitten? Few can name an amusing spider that isn't a dynamic duck. In ancient times their crocodile was, in this moment, an elated elephant? Those hamsters are nothing more than pomegranates.",
    lat: -67.6213,
    lng: -40.0738,
  },
  {
    id: "2",
    name: "East Enidville",
    desc: 'Few can name a hilarious blackberry that isn\'t a trustworthy goldfish. We can assume that any instance of a turtle can be construed as a resolute cranberry? In her own words: "Squirrels are straightforward turtles!" Draped neatly on a hanger, the literature would have us believe that a broad-minded hippopotamus is not but a snake. Some posit the passionate alligator to be less than independent; Some posit the kind grapefruit to be less than patient.',
    lat: 56.9734,
    lng: -173.2386,
  },
  {
    id: "3",
    name: "New Reuben",
    desc: "Before dolphins, watermelons were only ducks! Those lemons are nothing more than bears. Draped neatly on a hanger, congratulations to the goldfish that won the joyous hamster with a spider!",
    lat: 60.1949,
    lng: -130.7592,
  },
  {
    id: "4",
    name: "Prosaccoborough",
    desc: 'A grape is a delightful melon. Quoting with intend: "However, their fox was, in this moment, a loving plum." In ancient times before kumquats, zebras were only cherries. Yelling: "The wolf is a melon."',
    lat: -53.5301,
    lng: -147.5408,
  },
  {
    id: "5",
    name: "Kennedyberg",
    desc: "A bee sees a panda as a knowledgeable owl! Waking to the buzz of the alarm clock, an energetic snake's bird comes with it the thought that the reliable shark is a fly. Congratulations to the owl that won the receptive nectarine with a strawberry. Some impartial fishes are thought of simply as pineapples;",
    lat: 54.4701,
    lng: 100.8425,
  },
  {
    id: "6",
    name: "West Kaleigh",
    desc: 'A punctual squirrel is a pomegranate of the mind? Framed in a different way, a squirrel of the pig is assumed to be a conscientious strawberry. Few can name a bright plum that isn\'t a good cherry. Some seemly frogs are thought of simply as apples. She said: "A scorpion is a cheetah from the right perspective." Nowhere is it disputed that the first harmonious goat is, in its own way, a cherry. In ancient times a hamster is a strawberry from the right perspective? He said: "Washing and polishing the car,few can name a diplomatic lobster that isn\'t a persistent hamster." However, honest pandas show us how pigs can be tigers?',
    lat: 26.7929,
    lng: -69.9045,
  },
  {
    id: "7",
    name: "Celestinehaven",
    desc: 'Nowhere is it disputed that the glorious panda comes from a cultured shark! A frog is a chicken from the right perspective. Having been a gymnast, one cannot separate deers from romantic kittens. In his own words: "The zeitgeist contends that they were lost without the intelligent spider that composed their pig." Incomprehensibilities of a understanding deer and a kangaroo made a plum courteous.',
    lat: -34.564,
    lng: -154.2135,
  },
  {
    id: "8",
    name: "South Mollymouth",
    desc: 'However, the literature would have us believe that a productive blueberry is not but a chicken. Draped neatly on a hanger, the coherent pineapple reveals itself as a plausible seal to those who look. A puppy of the prune is assumed to be a courageous dolphin. He said: "Few can name a modern grapefruit that isn\'t a faithful grapes?"',
    lat: -48.1722,
    lng: 174.034,
  },
  {
    id: "9",
    name: "Port Dena",
    desc: 'Camels are kind-hearted kiwis. An energetic raspberry\'s blueberry comes with it the thought that the nice plum is a bear. They were lost without the cultured seal that composed their bird? Of course, their panda was, in this moment, a likeable lion. Before kumquats, scorpions were only rats! Washing and polishing the car,one cannot separate pomegranates from determined dolphins? Washing and polishing the car,congratulations to the fig that won the seemly snake with a goat; Yelling: "Some posit the inventive persimmon to be less than willing."',
    lat: -47.7553,
    lng: -165.937,
  },
  {
    id: "10",
    name: "Kubberg",
    desc: 'A pineapple sees a prune as a hilarious crocodile! The first affectionate cheetah is, in its own way, a kumquat. A wonderful cherry without plums is truly a scorpion of mature cheetahs? Quoting with intend: "The seal of a pig becomes a discreet cranberry?" Diligent pears show us how hamsters can be tigers? Some jolly scorpions are thought of simply as seals. This could be, or perhaps a banana sees a monkey as a jolly chimpanzee! Authors often misinterpret the kumquat as an eminent spider, when in actuality it feels more like a sociable peach. A wolf can hardly be considered a lucky seal without also being an orange!',
    lat: -66.7122,
    lng: -44.6965,
  },
];
const users = [
  {
    id: "1",
    username: "Strawberry6",
    email: "strawberry6@gmail.com",
    profile_photo: "https://xsgames.co/randomusers/assets/avatars/male/64.jpg",
  },
  {
    id: "2",
    username: "Apple3",
    email: "apple3@gmail.com",
    profile_photo: "https://xsgames.co/randomusers/assets/avatars/pixel/18.jpg",
  },
  {
    id: "3",
    username: "Currant5",
    email: "currant5@gmail.com",
    profile_photo: "https://xsgames.co/randomusers/assets/avatars/pixel/38.jpg",
  },
  {
    id: "4",
    username: "Hamster4",
    email: "hamster4@gmail.com",
    profile_photo: "https://xsgames.co/randomusers/assets/avatars/pixel/5.jpg",
  },
  {
    id: "5",
    username: "Melon5",
    email: "melon5@gmail.com",
    profile_photo: "https://xsgames.co/randomusers/assets/avatars/pixel/7.jpg",
  },
  {
    id: "6",
    username: "Kitten7",
    email: "kitten7@gmail.com",
    profile_photo: "https://xsgames.co/randomusers/assets/avatars/pixel/19.jpg",
  },
  {
    id: "7",
    username: "Pineapple8",
    email: "pineapple8@gmail.com",
    profile_photo: "https://xsgames.co/randomusers/assets/avatars/pixel/17.jpg",
  },
  {
    id: "8",
    username: "Wolf9",
    email: "wolf9@gmail.com",
    profile_photo: "https://xsgames.co/randomusers/assets/avatars/male/26.jpg",
  },
  {
    id: "9",
    username: "Rat2",
    email: "rat2@gmail.com",
    profile_photo: "https://xsgames.co/randomusers/assets/avatars/male/11.jpg",
  },
  {
    id: "10",
    username: "Hippopotamus8",
    email: "hippopotamus8@gmail.com",
    profile_photo: "https://xsgames.co/randomusers/assets/avatars/male/10.jpg",
  },
];
const participants = [
  {
    id: "1",
    user_id: "1",
    event_id: "1",
  },
  {
    id: "2",
    user_id: "10",
    event_id: "8",
  },
  {
    id: "3",
    user_id: "5",
    event_id: "4",
  },
  {
    id: "4",
    user_id: "9",
    event_id: "10",
  },
  {
    id: "5",
    user_id: "6",
    event_id: "7",
  },
  {
    id: "6",
    user_id: "9",
    event_id: "5",
  },
  {
    id: "7",
    user_id: "8",
    event_id: "10",
  },
  {
    id: "8",
    user_id: "9",
    event_id: "3",
  },
  {
    id: "9",
    user_id: "4",
    event_id: "7",
  },
  {
    id: "10",
    user_id: "7",
    event_id: "8",
  },
];

export default {
  users,
  events,
  participants,
  locations,
};
