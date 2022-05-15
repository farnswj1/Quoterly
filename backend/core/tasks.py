from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.mail import send_mail
from django.conf import settings
from celery import shared_task
from .models import User
import logging

logger = logging.getLogger(__name__)


@shared_task(name='core.email_new_user')
def email_new_user(_id):
    user = User.objects.get(id=_id)

    subject = 'Welcome to Quoterly!'
    html_message = render_to_string('mail/new_user.html', context={'user': user})
    plain_message = strip_tags(html_message)
    from_email = settings.EMAIL_HOST_USER

    send_mail(
        subject,
        plain_message,
        from_email,
        [user.email],
        html_message=html_message,
        fail_silently=False
    )


@shared_task(name='core.email_deleted_user')
def email_deleted_user(user):
    subject = 'Goodbye, from Quoterly!'
    html_message = render_to_string('mail/deleted_user.html', context={'user': user})
    plain_message = strip_tags(html_message)
    from_email = settings.EMAIL_HOST_USER

    send_mail(
        subject,
        plain_message,
        from_email,
        [user.get('email')],
        html_message=html_message,
        fail_silently=False
    )
