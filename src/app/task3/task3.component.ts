import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/data.service';

export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css'],
})
export class Task3Component implements OnInit {
  categoriesData;
  movieData;
  showCategories = false;
  showMovies = new Map([]);

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.getMoviesData();
    this.getMovieCategories();
  }

  getMoviesData() {
    this.backendService.getMovieCategories().subscribe((data) => {
      this.categoriesData = data;
    });
  }
  getMovieCategories() {
    this.backendService.getMoviesData().subscribe((data) => {
      this.movieData = data;
    });
  }

  getData(id: number) {
    if (this.showMovies.has(id)) {
      this.showMovies.delete(id);
    } else {
      let movieArr = this.movieData.filter((one) =>
        one?.categories.includes(id + 1)
      );
      this.showMovies.set(id, this.sortAsc('name', movieArr));
    }
  }

  sortAsc(column, data) {
    return data.sort((a, b) => {
      a = a[column].toLowerCase();
      b = b[column].toLowerCase();
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
  }
}
