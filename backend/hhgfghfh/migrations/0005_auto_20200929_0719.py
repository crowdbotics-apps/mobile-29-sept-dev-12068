# Generated by Django 2.2.16 on 2020-09-29 07:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0003_auto_20200929_0614"),
        ("hhgfghfh", "0004_ghhfjhfhg_hgjg"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="ghhfjhfhg",
            name="hgjg",
        ),
        migrations.AddField(
            model_name="ghhfjhfhg",
            name="ghj765765",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="ghhfjhfhg_ghj765765",
                to="home.HomePage",
            ),
        ),
    ]
