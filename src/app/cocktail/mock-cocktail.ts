import { Cocktail } from "../_model/cocktail.model";

const JsonCocktails = [
    {
        name: 'Dark ’n Stormy',
        description: 'Kruidige cocktail met ginger beer, bruine rum, limoensap en angostura bitters.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Paloma',
        description: 'Populaire Mexicaanse cocktail met tequila reposado, agavesiroop, limoensap en pompelmoessap.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Cranberry Thyme Sparkler',
        description: 'Verfrissende cocktail met vodka, huisgemaakte veenbessen-tijm siroop, Sprite en gember.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Fernet con Coca',
        description: 'Kruidige Argentijnse klassieker op basis van fernet en Coca Cola herbal.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Passionfruit Mojito',
        description: 'Een variant op de wereldberoemde mojito met witte rum, limoensap, rietsuiker en passievrucht.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'El Diablo',
        description: 'Deze duivelse cocktail bevat tequila, crème de cassis, ginger ale en limoensap.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Long Island Iced Tea',
        description: 'Stevige cocktail met gin, tequila, vodka, witte rum, triple sec, citroensap en Coca Cola.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Vesper martini',
        description: 'Deze Bond-klassieker bevat vodka, gin, Lillet blanc en uiteraard de signature olijf als garnituur.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Pornstar Martini',
        description: 'Deze ster schijnt het felst met vanille vodka, passievruchtsap en limoensap.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Espresso Martini',
        description: 'Who doesn’t drink coffee? Gecombineerd met wat vodka en koffielikeur krijg je het ideale digestief.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Park Avenue',
        description: 'Martini op basis van ananassap? Jazeker! Voeg triple sec, gin, rode vermouth toe en deze tropische Martini overtuigt volledig.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Manhattan',
        description: 'Een simpele, maar uiterst smaakvolle cocktail op basis van rode vermouth en bourbon.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Sex on The Beach',
        description: 'Summer in the house! Een mix van appelsiensap, vodka, crème de peche en veenbessensap, en je hebt de zon in een glas.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Amaretto Sour',
        description: 'Deze cocktail met citroensap en amaretto heeft de perfecte balans tussen zoet en zuur.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Cosmopolitan',
        description: 'Een verfrissende zomercocktail op basis van veenbessensap, triple sec, vodka en limoensap',
        imageLink: './assets/images/logo.png'
    }
];

const JsonMocktails = [
    {
        name: 'Apple Cucumber Tonic',
        description: 'Een variant op de klassieke gin & tonic met huisgemaakte appel-komkommer siroop, limoensap en tonic.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Cranberry Thyme Sparkler',
        description: 'Een zoete mocktail met huisgemaakte veenbessen-tijm siroop, limoensap en sprite.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Virgin Mojito',
        description: 'Iedereen kent de mojito. Ook de virgin mojito is in opmars. Deze mocktail bevat limoensap, gembersiroop, agavesiroop, munt en bruiswater.',
        imageLink: './assets/images/logo.png'
    },
    {
        name: 'Rosemary’s Ginger Ale',
        description: 'De naam zegt het zelf. Een verfrissend drankje op basis van honing-rozemarijn siroop, citroensap, bitters en ginger ale.',
        imageLink: './assets/images/logo.png'
    }
];

export const COCKTAILS: Cocktail[] = JsonCocktails.map(Cocktail.fromJSON);
export const MOCKTAILS: Cocktail[] = JsonMocktails.map(Cocktail.fromJSON);