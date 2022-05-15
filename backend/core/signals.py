from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.forms.models import model_to_dict
from .models import User
from .tasks import email_new_user, email_deleted_user


@receiver(post_save, sender=User)
def handle_saved_user(sender, instance, created, *args, **kwargs):
    if created:
        email_new_user.delay(instance.id)


@receiver(post_delete, sender=User)
def handle_deleted_user(sender, instance, *args, **kwargs):
    user = model_to_dict(instance)
    email_deleted_user.delay(user)
