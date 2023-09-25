
export function heoresThatStartsWith(nameList: string[], letter: string) {
    letter = letter.toUpperCase();
    let newNameList: string[] = [];

    for( let i = 0; i < nameList.length; i++) {
        let name = nameList[i];

        if( name.startsWith(letter)) {
            newNameList.push( name )
        }
    }

    return newNameList;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel',]

let herosWhitLetterS = heoresThatStartsWith(heroes, 'S');

console.log(herosWhitLetterS)