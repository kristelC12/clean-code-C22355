(() => {


    function isRedFruit( fruit: string ): boolean {
        
        const fruits = ['manzana', 'cereza', 'ciruela'];
        return fruits.includes(fruit) ? true : false;
    }

 
    function getFruitsByColor( color: string ): string[] {
    
        switch ( color ) {
            case 'red':
                return ['manzana','fresa'];
            case 'yellow':
                return ['piña','banana'];
            case 'purple':
                return ['moras','uvas'];
            default:
                throw Error('the color must be: red, yellow, purple');
        }
    }

    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        
        const steps = [
            { check: isFirstStepWorking, message: 'First step broken.' },
            { check: isSecondStepWorking, message: 'Second step broken.' },
            { check: isThirdStepWorking, message: 'Third step broken.' },
            { check: isFourthStepWorking, message: 'Fourth step broken.' },
        ];

        for (const step of steps) {
            if (!step.check) return step.message;
        }
        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();