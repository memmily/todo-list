new Vue ({
	el: '#container',
	data: {

		title: "",

		nextId: 4,

		todos: [
			{
				title: 'Study Vue.js',
				doneStyle: false,
				identifier: 1
			},

			{
				title: 'Use Vue.js on this project',
				doneStyle: false,
				identifier: 2
			},
				
			{
				title: 'Build portfolio with my projects',
				doneStyle: false,
				identifier: 3
			}	
		],
		
	},

	methods: {
		addTodo: function() {


			// var newTodo = this.title;

			// this.todos.push({title: newTodo, doneStyle: false, identifier: this.nextId++ });

			// this.title = '';


			var newTodo = this.title;

			if(newTodo !== '') {
				this.todos.push({title: newTodo, doneStyle: false, identifier: this.nextId++ });	
			}

			this.title = '';

		}

		,

		deleteTodo: function(todo) {

			var valueToRemove= todo.identifier;

			var notDone = [];

			for (var i=0; i<this.todos.length; i++) {
				currentTodo = this.todos[i];
				if(currentTodo.identifier !== valueToRemove) {
					notDone.push(this.todos[i]);
				}

			}

			this.todos = notDone;
			
		},

		delCrossedTodos: function() {
			var notDone = [];
			for (var i=0; i<this.todos.length; i++) {
				if(this.todos[i].doneStyle === false) {
					notDone.push(this.todos[i]);
				}
			}

			this.todos = notDone;
			

		},

		delAllTodos: function() {

			var deleteAll = [];
			if(this.todos) {
				this.todos = deleteAll;
			}
		}

	}

	
})



