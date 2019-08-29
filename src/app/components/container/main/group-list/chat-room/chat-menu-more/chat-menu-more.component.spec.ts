import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMenuMoreComponent } from './chat-menu-more.component';

describe('ChatMenuMoreComponent', () => {
  let component: ChatMenuMoreComponent;
  let fixture: ComponentFixture<ChatMenuMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMenuMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMenuMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
