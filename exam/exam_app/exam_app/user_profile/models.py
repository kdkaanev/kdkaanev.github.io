from django.db import models
from django.core.validators import MinValueValidator,MinLengthValidator

from exam_app.user_profile.validators import validate_name


# Create your models here.
class Profile(models.Model):
    username = models.CharField(
        blank=False,
        null=False,
        max_length=15,
        validators=[
            MinLengthValidator(3, "The username must be greater than 2 characters."),
            validate_name,
        ],


    )
    email = models.EmailField(
        blank=False,
        null=False,


    )
    age = models.IntegerField(
        blank=False,
        null=False,
        validators=[MinValueValidator(21)],
        help_text="Age requirement: 21 years and above.",

    )
    password = models.CharField(
        blank=False,
        null=False,
        max_length=20,


    )
    first_name = models.CharField(
        blank=True,
        null=True,
        max_length=25,
    )
    last_name = models.CharField(
        blank=True,
        null=True,
        max_length=25,
    )
    profile_picture = models.URLField(
        blank=True,
        null=True,
    )



