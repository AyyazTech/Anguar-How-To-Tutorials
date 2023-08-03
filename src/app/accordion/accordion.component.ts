import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  title = '';
  content = '';
  items: { title: string; content: string; active?: boolean }[] = [
    {
      title: 'Item 1',
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos officiis nesciunt veritatis corporis perferendis, reprehenderit pariatur vero ducimus, commodi rem deserunt sit consectetur, doloribus veniam similique quia placeat. Temporibus!

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos officiis nesciunt veritatis corporis perferendis, reprehenderit pariatur vero ducimus, commodi rem deserunt sit consectetur, doloribus veniam similique quia placeat. Temporibus!


Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos officiis nesciunt veritatis corporis perferendis, reprehenderit pariatur vero ducimus, commodi rem deserunt sit consectetur, doloribus veniam similique quia placeat. Temporibus!`,
    },
    {
      title: 'Item 2',
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos officiis nesciunt veritatis corporis perferendis, reprehenderit pariatur vero ducimus, commodi rem deserunt sit consectetur, doloribus veniam similique quia placeat. Temporibus!

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos officiis nesciunt veritatis corporis perferendis, reprehenderit pariatur vero ducimus, commodi rem deserunt sit consectetur, doloribus veniam similique quia placeat. Temporibus!


Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos officiis nesciunt veritatis corporis perferendis, reprehenderit pariatur vero ducimus, commodi rem deserunt sit consectetur, doloribus veniam similique quia placeat. Temporibus!`,
    },
    {
      title: 'Item 3',
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos officiis nesciunt veritatis corporis perferendis, reprehenderit pariatur vero ducimus, commodi rem deserunt sit consectetur, doloribus veniam similique quia placeat. Temporibus!

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos officiis nesciunt veritatis corporis perferendis, reprehenderit pariatur vero ducimus, commodi rem deserunt sit consectetur, doloribus veniam similique quia placeat. Temporibus!


Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos officiis nesciunt veritatis corporis perferendis, reprehenderit pariatur vero ducimus, commodi rem deserunt sit consectetur, doloribus veniam similique quia placeat. Temporibus!`,
    },
    {
      title: 'Item 4',
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos officiis nesciunt veritatis corporis perferendis, reprehenderit pariatur vero ducimus, commodi rem deserunt sit consectetur, doloribus veniam similique quia placeat. Temporibus!

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos officiis nesciunt veritatis corporis perferendis, reprehenderit pariatur vero ducimus, commodi rem deserunt sit consectetur, doloribus veniam similique quia placeat. Temporibus!


Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos officiis nesciunt veritatis corporis perferendis, reprehenderit pariatur vero ducimus, commodi rem deserunt sit consectetur, doloribus veniam similique quia placeat. Temporibus!`,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  itemClicked(i: number) {
    this.items = this.items.map((item) => {
      item.active = false;

      return item;
    });

    this.items[i].active = true;
  }

  addItem() {
    this.items.push({
      title: this.title,
      content: this.content,
    });
  }
}
