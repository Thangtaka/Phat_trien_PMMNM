# Generated by Django 4.2.9 on 2024-02-25 03:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0002_product_image'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Oder',
            new_name='Order',
        ),
        migrations.RenameModel(
            old_name='OderItem',
            new_name='OrderItem',
        ),
        migrations.RenameField(
            model_name='order',
            old_name='date_oder',
            new_name='date_order',
        ),
        migrations.RenameField(
            model_name='orderitem',
            old_name='oder',
            new_name='order',
        ),
        migrations.RenameField(
            model_name='shippingaddress',
            old_name='oder',
            new_name='order',
        ),
    ]
