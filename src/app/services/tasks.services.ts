import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from '../types/tasks-response.type';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7047/api/Task';
  getTasks(): Observable<Task[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((item) => ({
          id: item.id,
          userId: item.userId,
          title: item.title,
          summary: item.summary,
          dueDate: item.dueDate,
        }))
      )
    );
  }
}
