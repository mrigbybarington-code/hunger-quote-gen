function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

		var colors = [
			'#000000',

		];

var quotes = [
    ["Yes, some people say to me you're too skinny, but never a skinny person says that to me, only people who could lose a few pounds say that.","Karl Lagerfeld"],
    ["They say never trust a skinny chef, but the fact is, to stay healthy when you're a chef means you have to work twice as hard.","Marcus Samuelsson"],
    ["Being slim is the new elitism. Thinness today says that you are richer, smarter and more successful than the overweight masses.","David Zinczenko"],
    ["Nothing tastes as good as skinny feels.","Kate Moss"],
    ["Many obese people spend a significant amount of their energy on suppressing the urge to tell some of the people who are staring at them that they do not eat as much and as frequently as they seem to.","Mokokama Mokhonoana"],
    ["You get no thanks from your belly–it always forgets what you've just done for it and comes begging again the next day.","Aleksandr Solzhenitsyn"],
   ["The one whose concern is with that which enters the belly will discover that his value is found in that which goes out of it.","Abu Hamid al-Ghazali"],
  ["Gluttony is the act of digging a grave with your own teeth.","Enock Maregsi"],
  ["The glutton lives to eat instead of eating to live.","Vincent Okay Nwachukwu"],
  ["Only good poets cure us of an overindulgence in words. Only simple essential food cures us of gluttony.","Héctor Abad"],
  ["The most dangerous things in life are overeating and the lack of ambition.","Michael Bassey Johnson"],
  ["As long as the vice of gluttony has a hold on a man, all that he has done valiantly is forfeited by him: and as long as the belly is unrestrained, all virtue comes to naught.","Pope Gregory I"],
  ["He who distinguishes the true savor of his food can never be a glutton; he who does not cannot be otherwise.","Henry David Thoreau"],
  ["A big man is always accused of gluttony, whereas a wizened or osseous man can eat like a refugee at every meal, and no one ever notices.","Robertson Davies"],
  ["Fat paunches have lean pates, and dainty bits / Make rich the ribs, but bankrupt quite the wits.","William Shakespeare"],
  ["When I behold a fashionable table set out in all its magnificence, I fancy that I see gouts and dropsies, fevers and lethargies, with other innumerable distempers lying in ambuscade among the dishes. Nature delights in the most plain and simple diet. Every animal but man keeps to one dish. Herbs are the food of this species, fish of that, and flesh of a third. Man falls upon everything that comes in his way; not the smallest fruit or excrescence of the earth, scarce a berry or a mushroom can escape him.","Joseph Addison"],
  ["I shall speak first about control of the stomach, the opposite of gluttony, and about how to fast and what and how much to eat. I shall say nothing on my own account, but only what I have received from the Holy Fathers. They have not given us only a single rule for fasting or a single standard and measure for eating, because not everyone has the same strength; age, illness or delicacy of body create differences. But they have given us all single goal: to avoid over-eating and the filling of our bellies.","St. John Cassian"],
  ["Quod me nutrit, me destruit (what nourishes, also destroys.)","Latin proverb"],
  ["If you close your mouth to food you can know a sweeter taste.","Unknown"],
  ["By the end of a binge, you will mourn the will you had minutes before; this will not damage your conviction, but add more fuel to your need to be smaller.","Alexandria"],
  ["Sh, darling. You don't want to eat. You want the company of crumbs.","Alexandria"],
  ["When you're not hungry, you eat because your mouth is lonely.","Japanese proverb"],
  ["Your ancestors should be proud of your restraint. They ate little by necessity, and you eat little by choice. You leave them your excess food spiritually to nourish their ghosts.","Alexandria"],
  ["Whether gluttony is a deadly sin is of course for the religious to decide, and I hope they go easy on the foodies; they're not all bad. They are certainly single-minded, however, and single-mindedness—even in less obviously selfish forms—is always a littleness of soul.","B.R. Myers"],
  ["The corruption begins with the mouth, the tongue, the wanting. The first poem in the world is I want to eat.","Erica Jong"],
["Hungry to bed and hungry to rise makes a girl the smaller size.","Nobody"],
	["Hungry to bed and hungry to rise makes a man the smaller size.","Nobody"],
	["Burn and become.","Nobody"],
	["You're no dog. Don't reward yourself with food.","Nobody"],
	["If I can't be the pretty one, I ought to be the skinny one...","Nobody"],
	["They say these words are a spell: 'a second for the lips is a lifetime to the hips.'","Nobody"],
	["What you eat in private you wear in public.","Nobody"],
	["Dear, if you can't control what you give your mouth, what can you?","Nobody"],
	["Choose: be a snack or have one.","Nobody"],
	["Should I gain control, I lose weight. If I lose control, I gain it.","Nobody"],
	["Suffer discipline or suffer regret.","Nobody"],
	["Fat's flame goes longer than flavor's ever could.","Nobody"],
	["The food sitting in your house would rather not be eaten.","Alexandria"],
	["The greasy fry could tell no lie; it brands its emblem on your thigh.","Nobody"],
	["The stomach growls equal the fat's eviction.","Alexandria"],
	["I know the hunger hurts deliciously, nourish it further.","Alexandria"],
	["The best anorexics are dead.","Nobody"],
  ];
 

var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var color = "#000000";

// Put this line near the top of script.js (outside any function)
var recentIndexes = [];

function getQuote() {
    var randomquote;
    var minDistance = 10; 
    var maxHistory = Math.min(minDistance, quotes.length - 1);

    // Pick a random index that isn't in recent history
    do {
        randomquote = Math.floor(Math.random() * quotes.length);
    } while (recentIndexes.includes(randomquote));

    // Push new quote into history
    recentIndexes.push(randomquote);

    // Forget the oldest quote once history exceeds limit
    if (recentIndexes.length > maxHistory) {
        recentIndexes.shift();
    }

    randomcolor = Math.floor(Math.random() * colors.length);
    currentQuote = quotes[randomquote][0];
    currentAuthor = quotes[randomquote][1];

    if (inIframe()) {
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=aLamm&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }

    $(document).ready(function () {
        $('html body').animate({
            backgroundColor: colors[randomcolor],
            color: colors[randomcolor]
        }, 500);
        $('#newquote, .social-icons .fa-twitter').animate({ backgroundColor: colors[randomcolor] }, 500);
        $('blockquote footer').animate({ color: colors[randomcolor] }, 500);    
        $('blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);
        $('#quotetext').animate({ opacity: 0 }, 500, function () {
            $(this).animate({ opacity: 1 }, 500);
            $(this).text(currentQuote);
        });
        $('#quotesource').animate({ opacity: 0 }, 500, function () {
            $(this).animate({ opacity: 1 }, 500);
            $(this).text(currentAuthor);
        });
    });    
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

getQuote();

$(document).ready(function () {
    $('#newquote').on('click', getQuote);
    $('#tweetquote').on('click', function () {
        if (!inIframe()) {
            openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        }
    });
});
