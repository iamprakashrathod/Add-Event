import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the AddComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new event', () => {
    const event = {
      name: 'Test Event',
      date: '2023-02-28',
      time: '18:00',
      venue: 'Test Venue',
      description: 'Test Description',
      image: null
    };

    component.event = event;
    component.onSubmit();

    expect(component.events).toContain(event);
  });
});
