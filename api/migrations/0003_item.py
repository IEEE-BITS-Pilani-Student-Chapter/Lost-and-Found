# Generated by Django 4.0.5 on 2022-06-19 10:10

import datetime
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_user_phonenumber_user_profilepicture'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('itemName', models.CharField(max_length=80)),
                ('hostel', models.CharField(max_length=50)),
                ('room', models.CharField(max_length=20)),
                ('description', models.CharField(max_length=200)),
                ('phoneNumber', models.CharField(max_length=10, validators=[django.core.validators.MinLengthValidator(10)])),
                ('lastSeen', models.CharField(max_length=150)),
                ('status', models.BooleanField(default=True)),
                ('createdTs', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='api.user')),
            ],
        ),
    ]
