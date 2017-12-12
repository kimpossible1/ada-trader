import Backbone from 'backbone';
import Quote from '../models/quote';
import QuoteView from '../views/quote_view';

const QuoteListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    console.log(params);

    this.listenTo(this.model, 'update', this.render)
  },
  // events: {
  //   'click #add-new-task': 'addTask',
  // },
  // updateStatusMessageFrom(messageHash) {
  //   const $statusMessages = this.$('#status-messages');
  //   console.log($statusMessages);
  //   $statusMessages.empty();
  //   Object.keys(messageHash).forEach((messageType) => {
  //     messageHash[messageType].forEach((message) => {
  //       $statusMessages.append(`<li>${message}</li>`);
  //       console.log(`Error ${message}`);
  //     });
  //   });
  //   $statusMessages.show();
  //
  //   //if we were using underscore we could use:
  //   // _.each(messageHash, (messageType) => {
  //   //
  //   // });
  //
  // },
  // updateStatusMessage(message) {
  //   this.updateStatusMessageFrom({
  //     'task': [message],
  //   });
  // },
  //
  // addTask(event) {
  //   event.preventDefault();
  //
  //   const formData = this.getFormData();
  //   const newTask = new Task(formData);
  //
  //   if (newTask.isValid()) {
  //     this.model.add(newTask);
  //     this.clearFormData();
  //     this.updateStatusMessage(`${newTask.get('task_name')} Created!`);
  //   }
  //   else {
  //     console.log('ERROR');
  //     this.updateStatusMessageFrom(newTask.validationError);
  //     newTask.destroy();
  //   }
  // },
  // clearFormData() {
  //   ['task_name', 'assignee'].forEach((field) => {
  //     this.$(`#add-task-form input[name=${field}]`.val(''));
  //   })
  // },
  // getFormData() {
  //   const taskData = {};
  //   ['task_name', 'assignee'].forEach((field) => {
  //     const val = this.$(`#add-task-form input[name=${field}]`).val();
  //     if (val !== '') {
  //       taskData[field] = val;
  //     }
  //   })
  //   return taskData;
  // },
  render() {
    this.$('#quotes').empty();
    console.log(this);
    this.model.each((quote)=> {
      const quoteView = new QuoteView({
        model: quote,
        template: this.template,
        tagName: 'li',
        className: 'quotes',
      });
      this.$('#quotes').append(quoteView.render().$el);
    })
    return this;
    //always return this
  },
});

export default QuoteListView;