from django.db import models

# Create your models here.
class Book(models.Model):
    STATUS_CHOICES = [
        ('unread', 'Unread'),
        ('reading', 'Currently Reading'),
        ('read', 'Read'),
    ]
    
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    isbn = models.CharField(max_length=13, blank=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='unread')
    date_added = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title