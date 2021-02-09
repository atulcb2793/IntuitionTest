import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { v4 as uuidv4 } from 'uuid';
import { BackendService } from '../shared/data.service';
import { Todo } from '../task2/todoModel';
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
})
export class Task2Component implements OnInit {
  constructor(
    private backendService: BackendService,
    private modalService: BsModalService
  ) {}

  todoData;
  item = '';
  itemId;
  errorData;
  modalRef: BsModalRef;

  ngOnInit() {
    this.backendService.getTodoData().subscribe((data) => {
      this.todoData = data;
    });
  }

  addTodo() {
    this.errorData = '';
    if (this.item.trim().length < 1) {
      return this.handleError('Please enter Todo');
    }
    let todoObj: Todo = {
      id: uuidv4(),
      item: this.item.trim(),
      status: 'To Do',
    };
    this.backendService.addTodoData(todoObj).subscribe(
      (data) => {
        this.todoData = data;
        this.item = '';
      },
      (error) => {
        return this.handleError('Error Occured..!!');
      }
    );
  }

  deleteTodo() {
    this.backendService.deleteTodo(this.itemId).subscribe(
      (data) => {
        this.todoData = data;
      },
      (error) => {
        return this.handleError('Error Occured..!!');
      }
    );
  }

  alterStatus(newStatus) {
    this.modalRef.hide();
    this.backendService.alterTodoStatus(newStatus, this.itemId).subscribe(
      (data) => {
        this.todoData = data;
      },
      (error) => {
        return this.handleError('Error Occured..!!');
      }
    );
  }

  openModal(template: TemplateRef<any>, id?) {
    this.modalRef = this.modalService.show(template);
    this.itemId = id;
  }

  getColor(item, index) {
    if (index === 2) {
      switch (item) {
        case 'To Do':
          return 'blue';
        case 'Started':
          return 'yellow';
        case 'Done':
          return 'green';
      }
    }
  }

  confirm() {
    this.deleteTodo();
    this.modalRef.hide();
  }

  decline() {
    this.modalRef.hide();
  }

  handleError(error) {
    this.errorData = error;
  }
}
