from django.db import models
from django.conf import settings
from django.core.validators import (
    MinLengthValidator,
    MaxLengthValidator,
    RegexValidator,
    ProhibitNullCharactersValidator
)

# Create your models here.
class Tag(models.Model):
    text = models.CharField(
        max_length=20,
        validators=[
            MinLengthValidator(1),
            MaxLengthValidator(20),
            ProhibitNullCharactersValidator(),
        ]
    )


class Quote(models.Model):
    text = models.CharField(
        max_length=250,
        validators=[
            MinLengthValidator(1),
            MaxLengthValidator(250),
            ProhibitNullCharactersValidator(),
        ]
    )
    author = models.CharField(
        max_length=50,
        validators=[
            MinLengthValidator(1),
            MaxLengthValidator(50),
            RegexValidator("^[A-Z][A-Za-z \-']$"),
            ProhibitNullCharactersValidator(),
        ]
    )
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    tags = models.ManyToManyField(
        Tag,
        related_name="quotes"
    )

    class Meta:
        ordering = ("id",)
        unique_together = ("id", "text", "author")
