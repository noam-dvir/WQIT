# Generated by Django 2.2.1 on 2019-06-26 09:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_wqit', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='quote',
            name='quote_id',
        ),
    ]
