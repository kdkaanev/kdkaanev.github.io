from django.db import models
from django.core.validators import MinValueValidator,MinLengthValidator

from exam_app.car.validators import validate_year
from exam_app.user_profile.models import Profile


# Create your models here.

class Car(models.Model):
    CHOICES_TYPE= (
        ("rally", "Rally"),
        ("open_wheel", "Open Wheel"),
        ("kart", "Kart"),
        ("drag", "Drag"),
        ("other", "Other"),

    )


    type = models.CharField(
        blank=False,
        null=False,
        max_length=10,
        choices=CHOICES_TYPE,
    )
    model = models.CharField(
        blank=False,
        null=False,
        max_length=15,
        validators=[
            MinLengthValidator(1),
        ],

    )
    year = models.IntegerField(
        blank=False,
        null=False,
        validators=[
            validate_year
        ],
    )
    image_url = models.URLField(
        blank=False,
        null=False,
        unique=True,
        error_messages={
            "unique": "This image URL is already in use! Provide a new one.",
        }
    )
    price = models.FloatField(
        blank=False,
        null=False,
        validators=[
            MinValueValidator(1.0),
        ]
    )
    owner = models.ForeignKey(
        to=Profile,
        on_delete=models.CASCADE,
    )