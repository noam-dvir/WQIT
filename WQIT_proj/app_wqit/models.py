from django.db import models

# Create your models here.

class Person(models.Model):
    person_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=264,unique=True)
    image_url = models.URLField(unique=True)

    def __str__(self):
        return self.name


class Quote(models.Model):
    quote_id = models.IntegerField(unique=True)
    quote_text = models.CharField(max_length=264,unique=True)
    quote_source = models.ForeignKey(Person,on_delete=models.CASCADE)

    def __str__(self):
        return self.quote_text
