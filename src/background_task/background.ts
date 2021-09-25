import { Queue } from 'bull';
import { Injectable } from '@nestjs/common';

export class send_message_background{
  constructor(){
    this.queue = new Queue('send_confirmations_to_users');
    this.queue.process(job => {
      this.send_message_to_user( job );
    })
  }
  addmessageToQueue(data){
    this.queue.add(data)
  }

  async send_message_to_user(job){
    const { message } = job.data;
    const msg_to_be_sent = {
      message
    };
    try {
      job.moveToCompleted('done', true)
    } catch (error) {
      if (error.response) {
        job.moveToFailed({message: 'job failed'})
      }
    }
  }
}

