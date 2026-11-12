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
    ["Shh, it's okay, as long as you can tame your hunger. This, the only thing you need to be beautiful. Aren't you in love already with the gravity of a famished stomach? Do I not nourish you by giving you only the best and few? Can you deny that it feels like every hour a meal is put off you are rewarded? Could you deny that you feel accomplished and smug by the evening when you've eaten half the calories you by biology should've?","Anorexia"],
    ["Gluttony is not a secret vice.","Orson Welles"],
    ["Not addicted to gluttony or drunkenness, this people who incur no expense in food or dress, and whose minds are always bent upon the defence of their country, and on the means of plunder, are wholly employed in the care of their horses and furniture.","Giraldus Cambrensis"],
    ["Festivals cause diseases, since they lighten cares but increase gluttony.","Apollonius of Tyana"],
    ["The man who eats more than he ought does wrong, and the man who eats in undue haste no less, and also the man who wallows in the pickles and sauces, and the man who prefers the sweeter foods to the more healthful ones, and the man who does not serve food of the same kind or amount to his guests as to himself.","Musonius Rufus"],
    ["Mastering one's appetite is the very foundation of training in self-control.","Musonius Rufus"],
    ["For obviously the philosopher's body should be well prepared for physical activity, because often the virtues make use of this as a necessary instrument for the affairs of life.","Musonius Rufus"],
    ["Every fat person says it's not their fault, that they have gland trouble. You know which gland? The saliva gland. They can't push away from the table.","Jesse Ventura"],
    ["Eating – overeating – saved me. It comforted me when I was at the mercy of grown-ups who didn't know how to give what I needed. Food was something to which I had ready access, and with it I cleverly fashioned a survival mechanism that pulled me back from the edge of insanity. – a young MacGuyver of angst and junk food.","Kim Brittingham, to inspire your opposite"],
    ["During most all of human evolution, it was adaptive to conserve energy by being lazy as circumstances permitted. Energy was a vitally needed resourse and could not be wasted. Today this take-it-easy adaptation may lead us to watch tennis on television when we would be better off playing it. This can only aggravate the effects of excess nutrition. The average office worker would be much more healthy if he or she spent the day digging clams or harvesting fruit in scattered tall trees.","Randolph M. Nesse"],
    ["Isn't the person who endlessly shoves Five Guys burgers into her mouth, all the while allowing her muffin top to grow exponentially, the one with the mental health issue?","Kit Olsen"],
    ["Eating breakfast breaks the fast. Skipping breakfast breaks the fat.","Mokokoma Mokhonoana"],
    ["I will not fall into the trap of being told to eat more and then being called fat at the same party. Only I control what I eat and how I feel about my body.","The Thoughtful Beast"],
    ["A fat person cannot hide the fact that something has gone awry.","Roxane Gay"],
    ["In my experience women can balloon for no reason at all.","Sol Luckman"],
    ["Because they are fat, some children look like their parents, and some look like they’re parents.","Mokokoma Mokhonoana"],
    ["When their [thin people] talk rolls around to calories and their moral obligation to hate themselves, I typically spread out as wide as I can. I can expand like a jellyfish; it is a particular advantage of the very fat. I conform to the shape of my container like a water balloon. Displaying maximum width, I'll eat anything I can get my hands on while they talk.","Meg Elison, to inspire your opposite"],
    ["We enjoy rest and relaxation, but our bodies are still those of endurance athletes evolved to walk many miles a day and often run, as well as dig, climb and carry. We love many comforts, but we are not well adapted to spend our days indoors in chairs, wearing supportive shoes, staring at books or screens for hours on end.","Daniel E. Lieberman"],
    ["It is well established that gaining weight around the belly is a sign of underlying sickness in many cases.","Steven Magee"],
    ["Some people who have been working out regularly for months or even years are still out of shape because the number of cheat days they have in a week exceeds six.","Mokokoma Mokhonoana"],
    ["More often than not, expecting to lose weight without first losing the diet that made the weight loss necessary is like expecting a pig to be spotless after hosing it down while it was still rolling in mud.","Mokokoma Mokhonanoa"],
    ["No matter how much I tell myself that the fat and the stretch marks don’t matter, they do.","Julie Murphy"],
    ["All fat women look the same, they all look forty-two. Also, fat women are not more noticeable than thin women; they’re less noticeable, because people find them distressing and look away. To the ushers and the ticket sellers I must’ve appeared as a huge featureless blur.","Margaret Atwood"],
    ["Most people stop eating not when their stomachs are full but when their plates are empty.","Mokokoma Mokhonoana"],
    ["Make that: no one I ever wanted to kiss wanted to kiss a fat girl.","Rainbow Rowell"],
    ["When a fat person goes in the water naked, would it still be called skinny-dipping?","Anthony Liccione"],
    ["Poverty, like obesity, has the tendency to add at least ten years to the appearance of its victims, especially those who are over the age of twenty.","Mokokoma Mokhonoana"],
    ["God, I hate judgmental people. They're so mean... and fat.","John R. Lindensmith"],
    ["Let me tell you something, my wife died four Tuesdays ago. Cancer of the colon. We were married forty-one years. Now you stop feeling sorry for yourself and lose some of that pork of yours. Pretty girl like you - you don't want to do this yourself.","Wally Lamb"],
    ["The truth of the matter was that Juliet would look good in a sack. Somehow everything she wore fitted perfectly. Glenda, on the other hand, never found anything good in her size and indeed seldom anything in her size. In theory, something should fit, but all she ever found was facts, which are so unbecoming.","Terry Pratchett"],
    ["Thinking about working out burns 0 calories, 0 percentage of fat and accomplishes 0 goals!","Gwen Ro"],
    ["He was a large, fleshy man, weighing at least two hundred pounds, and he quickly became a faithful representation of a quivering jelly mountain of fat.","Jack London"],
    
  ];
 

var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var color = "#000000";

var quoteDeck = [];

function getQuote() {
    if (quoteDeck.length === 0) {
        for (var i = 0; i < quotes.length; i++) {
            quoteDeck.push(i);
        }
        for (var i = quoteDeck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = quoteDeck[i];
            quoteDeck[i] = quoteDeck[j];
            quoteDeck[j] = temp;
        }
    }

    randomquote = quoteDeck.pop();

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
