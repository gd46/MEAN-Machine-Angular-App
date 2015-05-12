// name our angular app

angular.module('firstApp', [])
    .controller('mainController', function() {

        // bind this to vm (view-model)
        var vm = this;

        // define variables and objects on this

        // this lets them be available to our views

        // define a basic variable
        vm.messsage = 'Hello World';

        // dfine a list of items
        vm.computers {
            {
                name: 'Macbook Pro',
                color: 'Silver',
                nerdness: 7
            }, {
                name: 'Yoga 2 Pro',
                color: 'Grey',
                nerdness: 6
            }, {
                name: 'Chromebook',
                color: 'Black',
                nerdness: 5
            }

        }

    });