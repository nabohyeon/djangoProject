from lib2to3.pgen2.token import NAME
from django.db import models

# Create your models here.

class AssetStatus(models.Model):
    num = models.AutoField(db_column='NUM', primary_key=True)  # Field name made lowercase.
    workplace = models.CharField(db_column='WORKPLACE', max_length=100)  # Field name made lowercase.
    floor = models.CharField(db_column='FLOOR', max_length=100)  # Field name made lowercase.
    team = models.CharField(db_column='TEAM', max_length=100)  # Field name made lowercase.
    name = models.CharField(db_column='NAME', max_length=100)  # Field name made lowercase.
    type = models.CharField(db_column='TYPE', max_length=100)  # Field name made lowercase.
    perpose = models.CharField(db_column='PERPOSE', max_length=100)  # Field name made lowercase.
    office = models.CharField(db_column='OFFICE', max_length=100, blank=True, null=True)  # Field name made lowercase.
    os = models.CharField(db_column='OS', max_length=100)  # Field name made lowercase.
    genuine = models.IntegerField(db_column='GENUINE')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'asset_status'