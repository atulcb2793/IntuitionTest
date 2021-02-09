import { Injectable } from '@angular/core';
import { remove } from 'lodash';
import { of } from 'rxjs';
import { Todo } from '../task2/todoModel';

@Injectable()
export class BackendService {
  getDeviceData() {
    return of(this.deviceData);
  }

  getTodoData() {
    return of(this.todoList);
  }

  addTodoData(todo) {
    let ans = this.todoList.some((a) => a.item === todo.item);
    if (this.todoList.length === 0 || !ans) this.todoList.push(todo);
    return of(this.todoList);
  }

  deleteTodo(todo) {
    remove(this.todoList, { id: todo });
    return of(this.todoList);
  }

  alterTodoStatus(status, id) {
    this.todoList = this.todoList.map((a, i) => {
      if (a.id === id) {
        a.status = status;
      }
      return a;
    });
    return of(this.todoList);
  }

  getMoviesData() {
    return of(this.moviesData.movies);
  }

  getMovieCategories() {
    return of(this.moviesData.categories);
  }

  // hard coded data

  moviesData = {
    categories: [
      {
        id: 1,
        name: 'Action',
      },
      {
        id: 2,
        name: 'Adventure',
      },
      {
        id: 3,
        name: 'Crime',
      },
      {
        id: 4,
        name: 'Comedy',
      },
      {
        id: 5,
        name: 'Horror',
      },
      {
        id: 6,
        name: 'Triller',
      },
    ],
    movies: [
      {
        id: 1,
        name: 'First Blood',
        categories: [1],
      },
      {
        id: 2,
        name: 'Hot Shots',
        categories: [1, 4],
      },
      {
        id: 3,
        name: 'Inside Man',
        categories: [3, 6],
      },
      {
        id: 4,
        name: 'IT',
        categories: [5],
      },
      {
        id: 5,
        name: 'Journey to the misterious island',
        categories: [1],
      },
      {
        id: 6,
        name: 'The sum of all fears',
        categories: [1, 3, 6],
      },
      {
        id: 7,
        name: 'Man on Fire',
        categories: [1, 3, 6],
      },
      {
        id: 8,
        name: 'Jason Bourne',
        categories: [1, 6],
      },
      {
        id: 9,
        name: 'Blade 2',
        categories: [1, 5],
      },
      {
        id: 10,
        name: 'Boo',
        categories: [5],
      },
      {
        id: 11,
        name: 'Thor Ragnarock',
        categories: [1, 2],
      },
      {
        id: 12,
        name: 'Die Hard',
        categories: [1, 3],
      },
      {
        id: 13,
        name: 'Spy',
        categories: [1, 4],
      },
      {
        id: 14,
        name: 'The Equalizer',
        categories: [1, 3, 6],
      },
      {
        id: 15,
        name: 'The Avengers',
        categories: [1, 2],
      },
      {
        id: 16,
        name: 'Tenet',
        categories: [1, 6],
      },
      {
        id: 17,
        name: 'Zombieland',
        categories: [1, 2, 4, 5],
      },
    ],
  };

  todoList: Todo[] = [];

  deviceData = {
    devices: [
      {
        id: 1,
        name: 'iPhone 12',
        type: 'Mobile Phone',
        price: '$699',
      },
      {
        id: 2,
        name: 'iPhone 12 Pro',
        type: 'Mobile Phone',
        price: '$999',
      },
      {
        id: 3,
        name: 'Samsung Galaxy 20',
        type: 'Mobile Phone',
        price: '$999',
      },
      {
        id: 4,
        name: 'Samsung Galaxy 20 Pro',
        type: 'Mobile Phone',
        price: '$1199',
      },
      {
        id: 5,
        name: 'MacBook Pro',
        type: 'Laptop',
        price: '$829',
      },
      {
        id: 6,
        name: 'Acer 315',
        type: 'Laptop',
        price: '$500',
      },
      {
        id: 7,
        name: 'Acer Aspire 5',
        type: 'Laptop',
        price: '$800',
      },
      {
        id: 8,
        name: 'Audiotechnica ATH-SR30BT',
        type: 'Headphones',
        price: '$99',
      },
      {
        id: 9,
        name: 'A4Tech G7-74',
        type: 'Mouse',
        price: '$18',
      },
      {
        id: 10,
        name: 'A4Tech A3',
        type: 'Mouse',
        price: '$29',
      },
      {
        id: 11,
        name: 'WD - 250',
        type: 'Hard Disk',
        price: '$80',
      },
      {
        id: 12,
        name: 'WD - 512 SSD',
        type: 'Hard Disk',
        price: '$99',
      },
      {
        id: 13,
        name: 'WD - 32',
        type: 'USB Memory Stick',
        price: '$12',
      },
      {
        id: 10,
        name: 'Kingston - 32',
        type: 'USB Memory Stick',
        price: '$9',
      },
    ],
  };
}
