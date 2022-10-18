import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task.model';
import { Observable } from 'rxjs'
import { HttpClient, HttpHandler } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl + '/tasks');
  }

  deleteTask(id: number): Observable<Task>{
    return this.http.delete<Task>(this.apiUrl + '/tasks/' + id);
  }
}
