import {Cocktailbox} from '../model/cocktailbox.model';

const JsonCocktailboxes = [
    {
        name: 'Just the two of us',
        subtitle: 'Maak een keuze van 2 cocktails uit ons assortiment.',
        description: 'Jouw twee huisgemaakte cocktailmixen, twee rietjes en de nodige garnituren. Je wordt voorzien van een duidelijke beschrijving over de gekozen drankjes.',
        amount: 2,
        price: 20.0,
        imageLink: './assets/images/logo.png',
        choicetitle: 'Kies 2 cocktails – €20,00',
        choices: [
            'Dark ’n Stormy',
            'Paloma',
            'Cranberry Thyme Sparkler',
            'Fernet Con Coca',
            'Passionfruit Mojito',
            'El Diablo',
            'Long Island Iced Tea',
            'Sex on The Beach',
            'Cosmopolitan',
            'Amaretto Sour',
            'Pornstar Martini',
            'Espresso martini',
            'Manhattan',
            'Park Avenue'
        ],
        quote: '‘If you start sweet, then you’ve got somewhere to go’ -Bill Withers'
    },
    {
        name: 'The fab four',
        subtitle: 'Maak een keuze van 4 cocktails uit ons assortiment.',
        description: 'Jouw vier huisgemaakte cocktailmixen, twee rietjes en de nodige garnituren. Je wordt voorzien van een duidelijke beschrijving over de gekozen drankjes.',
        amount: 4,
        price: 36.0,
        imageLink: './assets/images/logo.png',
        choicetitle: 'Kies 4 cocktails – €36,00',
        choices: [
            'Dark ’n Stormy',
            'Paloma',
            'Cranberry Thyme Sparkler',
            'Fernet Con Coca',
            'Passionfruit Mojito',
            'El Diablo',
            'Long Island Iced Tea',
            'Sex on The Beach',
            'Cosmopolitan',
            'Amaretto Sour',
            'Pornstar Martini',
            'Espresso martini',
            'Manhattan',
            'Park Avenue'
        ],
        quote: '‘The problem with the world is that everyone is a few drinks behind’ -Humphrey Bogart'
    },
    {
        name: 'Let’s get sixy',
        subtitle: 'Maak een keuze van 6 cocktails uit ons assortiment.',
        description: 'Jouw zes huisgemaakte cocktailmixen, twee rietjes en de nodige garnituren. Je wordt voorzien van een duidelijke beschrijving over de gekozen drankjes.',
        amount: 6,
        price: 53.0,
        imageLink: './assets/images/logo.png',
        choicetitle: 'Kies 6 cocktails – €53,00',
        choices: [
            'Dark ’n Stormy',
            'Paloma',
            'Cranberry Thyme Sparkler',
            'Fernet Con Coca',
            'Passionfruit Mojito',
            'El Diablo',
            'Long Island Iced Tea',
            'Sex on The Beach',
            'Cosmopolitan',
            'Amaretto Sour',
            'Pornstar Martini',
            'Espresso martini',
            'Manhattan',
            'Park Avenue'
        ],
        quote: '‘Give me a drink that wakes me up but then f**ks me up’ -An unkown model somewhere in a bar'
    },
    {
        name: 'Mocktails',
        subtitle: 'Lekkere non-alcoholische alternatieven aan €7 per mocktail',
        description: 'Heb je graag een non-alcoholisch alternatief voor het cocktail aanbod? Dan zijn deze mocktails ideaal voor jou. Het is mogelijk om bovenstaande boxen te bestellen en enkele cocktails te vervangen in mocktails.',
        amount: 6,
        price: 53.0,
        imageLink: './assets/images/logo.png',
        choicetitle: 'Keuze mocktails',
        choices: [
            'Apple cucumber tonic',
            'Cranberry thyme mocktail',
            'Virgin mojito',
            'Rosemary’s ginger ale'
        ],
        quote: '‘If the ambiance is right, you’ll get your high on a mocktail in a cocktail glass.’ -Tapan Ghosh'
    }
];

export const COCKTAILBOXES: Cocktailbox[] = JsonCocktailboxes.map(Cocktailbox.fromJSON);